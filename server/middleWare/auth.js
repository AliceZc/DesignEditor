let log4js = require('../logger');
const sysLog = log4js.getLogger('system');
const {
  MessageHeader,
} = require('~/co/faao/plugin/transmission/request/MessageHeader');
const dubbo = require('~/dubboService');
let dubboService = dubbo.service;
async function auth(ctx, next) {
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
      let result = await dubboService.IUserServiceProvider.loginVerification(
        new MessageHeader({
          params: JSON.stringify({
            loginToken: ctx.headers.authorization,
            areaFlag: 0,
          }),
        }),
      );
      if (!result || !result.res || result.res.status !== 1) {
        ctx.response.status = 401;
        ctx.body = { status: 401, message: 'Token Verification failure' };
        logger.error(ctxUrl + '页面权限校验失败！token失效');
      } else {
        await next();
      }
    } catch (err) {
      sysLog.error(ctx.url + ' :' + err.message);
    }
  }
}
module.exports = auth;
