const log4js = require('./logger');
let _ = require('lodash');
const logger = log4js.getLogger();
const {
  MessageHeader,
} = require('./co/faao/plugin/transmission/request/MessageHeader');
//接口统一调用方法
async function dubboMethod({ ctx, next, method, req }) {
  console.log('next', next);
  let newReq = _.clone(req);
  let obj = {
    uuheader: decodeURI(_.get(ctx.header, 'uuheader')),
  };
  if (newReq?.i18n) {
    obj.i18n = newReq.i18n;
    delete newReq.i18n;
  }
  obj.params = _.isString(newReq) ? newReq : JSON.stringify(newReq);

  const { res, err } = await method(new MessageHeader(obj));
  if (err) {
    //这里记录日志
    if (err.message.includes(':Could not find any agent worker')) {
      ctx.status = 408;
    } else {
      ctx.status = 500;
    }
    logger.error(
      ctx.url + ' 调用失败! errMsg:' + err.message + ' 入参：' + params,
    );
    console.log('----------' + ctx.url + ' 调用失败!----------');
    console.log('入参：', params);
    console.log('errMsg:', err);
    console.log('----------' + ctx.url + ' 调用结束!----------');
  } else {
    ctx.body = res;
    logger.info(ctx.url + ' 调用成功! 入参：' + params);
    console.log('----------' + ctx.url + ' 调用成功!----------');
    console.log('入参：', params);
    console.log('出参', res);
    console.log('----------' + ctx.url + ' 调用结束!----------');
  }
}
module.exports = { dubboMethod };
