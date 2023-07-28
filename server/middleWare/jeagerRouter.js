let log4js = require('../logger');
let _ = require('lodash');
const sysLog = log4js.getLogger('system');
const tracer = require('../jeagerTrace');
const opentracing = require('opentracing');
const zone = require('zone-context').default;
async function jaegerRouter(ctx, next) {
  let ctxUrl = ctx.url;
  let reg = /^\/api/g;
  if (
    ctxUrl.includes('/login') ||
    ctxUrl.includes('/actuator/info') ||
    ctxUrl.includes('/loginVerification') ||
    ctxUrl.includes('/actuator/selfCheck') ||
    ctxUrl.includes('/app/health') ||
    ctxUrl.includes('/apollo') ||
    !reg.test(ctxUrl)
  ) {
    await next();
  } else {
    try {
      let uuheader = _.get(ctx.header, 'uuheader') || {};
      let referer = ctx.headers.referer;
      let url = referer ? new URL(referer) : {};
      const span = tracer.startSpan(ctx.url, {
        tags: {
          url: ctx.url,
          referer: url.origin + url.pathname,
          user: uuheader.account || '',
          dept: uuheader.deptCode || '',
          ward: uuheader.wardCode || '',
        },
      });
      let carrier = {};
      tracer.inject(span.context(), opentracing.FORMAT_TEXT_MAP, carrier);
      zone.setRootContext('tradeId', carrier);
      await next();
      span.setTag('status_code', ctx.status);
      span.finish();
      if (ctx.status === 408) {
        // fetchError()
      }
    } catch (err) {
      sysLog.error(ctx.url + ' :' + err.message);
    }
  }
}
module.exports = jaegerRouter;
