const log4js = require('log4js');
const zone = require('zone-context').default;
const os = require('os');
const pkage = require('~/package');

log4js.configure({
  appenders: {
    file: {
      type: 'dateFile',
      layout: {
        type: 'pattern',
        pattern: `%d{yyyy-MM-dd hh:mm:ss,SSS} %p [${pkage.name}] [main] [%f:%l] - trace[%x{tradeId}] %m`,
        tokens: {
          tradeId: function () {
            let tradeId = zone.get('tradeId');
            return tradeId ? `${tradeId['uber-trace-id']}` : '';
          },
        },
      },
      filename: `./logs/${os.hostname()}.log`,
      maxLogSize: 1024 * 1024 * 10,
      backups: 100,
    },
    system: {
      type: 'dateFile',
      layout: {
        type: 'pattern',
        pattern: `%d{yyyy-MM-dd hh:mm:ss,SSS} %p [${pkage.name}] [main] [%f:%l] -  trace[%x{tradeId}] %m`,
        tokens: {
          tradeId: function () {
            let tradeId = zone.get('tradeId');
            return tradeId ? `${tradeId['uber-trace-id']}` : '';
          },
        },
      },
      filename: `./logs/${os.hostname()}.sys`,
      maxLogSize: 1024 * 1024 * 10,
      backups: 100,
    },
    console: {
      type: 'console',
      layout: {
        type: 'pattern',
        pattern: `%[%d{yyyy-MM-dd hh:mm:ss,SSS} - %m%]`,
      },
    },
  },
  categories: {
    // @ts-ignore
    default: { appenders: ['file'], level: 'debug', enableCallStack: true },
    system: { appenders: ['system'], level: 'debug', enableCallStack: true },
    console: { appenders: ['console'], level: 'debug' },
  },
});
module.exports = log4js;
