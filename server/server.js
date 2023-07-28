require('module-alias/register');
const Koa = require('koa');
const path = require('path');
const compress = require('koa-compress');
const mount = require('koa-mount');
const { join, extname } = require('path');
const Static = require('koa-static');
const xtpl = require('koa-xtpl');
const { parseCookie, parseNavLang } = require('./serverHelper');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const getApolloConfig = require('./middleWare/getApolloconfig');
const jeagerTrace = require('./middleWare/jeagerRouter');
const auth = require('./middleWare/auth');
const router = new Router({
  prefix: '/api',
});
const routers = require('./router');
const root = join(__dirname, '../dist');

const app = new Koa();
const env = process.env.NODE_ENV;
const isDev = env === 'development';
const defaultConfig = {};

async function setGlobalConfig() {
  let config;
  try {
    config = await getApolloConfig();
    if (!!config) {
      console.log('Success: get remote config', config);
    } else {
      console.log('Error: failed to get apollo configs');
      config = defaultConfig;
      console.log('Fall back to the default config', defaultConfig);
    }
  } catch (error) {
    console.log('Error: failed to get apollo configs.', error);
    config = defaultConfig;
    console.log('Fall back to the default config', defaultConfig);
  } finally {
    global.config = config;
  }
}
setGlobalConfig();
app.use(jeagerTrace);
app.use(
  compress({
    threshold: 2048,
    gzip: {
      flush: require('zlib').constants.Z_SYNC_FLUSH,
    },
    deflate: {
      flush: require('zlib').constants.Z_SYNC_FLUSH,
    },
    br: false, // 禁用br解决https gzip不生效加载缓慢问题
  }),
);

//配置任何请求都转到index.html，而index.html会根据React-Router规则去匹配任何一个route

app.use(Static(path.resolve(__dirname, root)));

// app.use(views(path.resolve(__dirname , '../view'), {
//   extension: 'ejs'
// }))

app.use(bodyParser());
//暂时关闭token校验
// app.use(auth)
app.use(routers());
//解决BrowserRouter的不能刷新的问题
app.use(
  xtpl({
    root: path.resolve(__dirname, '../dist'),
    extname: 'html',
    commands: {},
  }),
);
app.use(async (ctx, next) => {
  await ctx.render('index', {});
});
let render;
isDev &&
  app.use(async (ctx, next) => {
    /**
     *  扩展global对象
     *
     *  这里是在服务端处理好cookie，
     *  会把所有cookie处理成{}形式
     *  赋值到global上面，方便客户端使用
     *
     *  同时获取浏览器的默认语言，处理好
     */
    global._cookies = parseCookie(ctx);
    global._navigatorLang = parseNavLang(ctx);

    const ext = extname(ctx.request.path);
    // 符合要求的路由才进行服务端渲染，否则走静态文件逻辑
    // if (!ext) {
    //   if (!render) {
    //     render = require('../dist/umi.server');
    //   }
    //   // 这里默认是字符串渲染
    //   ctx.type = 'text/html';
    //   ctx.status = 200;
    //   console.log('url',ctx.request.url)
    //   const { html, error } = await render({
    //     path: ctx.request.url,
    //   });
    //   if (error) {
    //     console.log('----------------服务端报错-------------------', error);
    //     ctx.throw(500, error);
    //   }
    //   ctx.body = html;
    // } else {
    //   await next();
    // }
  });

/**
 *  注意这里的静态目录设置，需要和umi打包出来的目录是同一个
 *  这里最好是用nginx配置静态目录，如果是用cdn方式部署，这里可以忽略
 *
 */
console.log(
  '\x1b[32m%s',
  `bff启动成功：http://localhost:${process.env.PORT || 3003}`,
);
app.listen(process.env.PORT || 3003);
module.exports = app.callback();
