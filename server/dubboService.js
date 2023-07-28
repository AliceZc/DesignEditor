const { Dubbo, setting } = require('dubbo2.js');
let path = require('path'); //系统路径模块
const isDev = process.env.NODE_ENV === 'development';
// const isDev = true;
const registerAddress = 'zookeeper:2181';
// const registerAddress = '192.168.198.95:32176';
const zone = require('zone-context').default;

const userService = require('./router/user');

const service = {
  ...userService,
};

const dubboSetting = setting
  .match(/^cc.ewell.authority/, {
    version: '1.0.0',
  })
  .match(/^cc.ewell.comm/, {
    version: '1.0.0',
  })
  .match(/^cc.ewell.pms/, {
    version: '1.0.0',
  })
  .match(/^cc.ewell.pas/, {
    version: '1.0.0',
  })
  .match(/^cc.ewell.cmh/, {
    version: '1.0.0',
  });
console.log('isDev', isDev);
const pkg = require(path.resolve(process.cwd(), './package.json'));
const dubbo = new Dubbo({
  application: { name: pkg.serviceName },
  register: registerAddress,
  service: isDev ? {} : service,
  dubboInvokeTimeout: 180,
  dubboSetting,
});
dubbo.use(async function costTime(ctx, next) {
  Object.assign(ctx.attachments, zone.get('tradeId'));
  await next(ctx);
});

module.exports = isDev
  ? {
      service,
    }
  : dubbo;
