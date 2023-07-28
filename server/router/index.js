const combineRouters = require('koa-combine-routers');

const userRouter = require('./user/controller');

const router = combineRouters(userRouter);
module.exports = router;
