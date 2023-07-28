const Router = require('koa-router');
const dubbo = require('~/dubboService');
const util = require('~/util');
const router = new Router({
  prefix: '/api',
});

router.get('/getUserInfo', async (ctx, next) => {
  console.log('----------------');
  return await util.dubboMethod({
    ctx,
    next,
    method: dubbo.service.IAppManageServiceProvider.getAppTagList,
    req: ctx.request.body,
  });
});

router.get('/testRouter', async (ctx, next) => {
  console.log('-------testFile---------');
  ctx.body = {
    welcome: '欢迎',
    hello: '你好',
  };
  ctx.status = 200;
});

module.exports = router;
