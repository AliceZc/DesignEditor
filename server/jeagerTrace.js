let log4js = require('./logger');
const pkg = require('../package.json');
const initJaegerTracer = require('jaeger-client').initTracer;
const isDev = process.env.NODE_ENV === 'development';
const sysLog = log4js.getLogger('system');
const log = log4js.getLogger('console');

const config = {
  serviceName: isDev
    ? pkg.serviceName
    : process.env.JAEGERNAME || 'bff-nur-ewell',
  // serviceName: 'bff-nur-ewell',

  sampler: {
    type: 'const',
    param: 1,
  },
  reporter: {
    logSpans: true,
    agentHost: isDev ? pkg.agentHost : process.env.JAEGER_AGENT_HOST,
  },
};

const options = {
  logger: {
    info: function (msg) {
      log.info(msg);
    },
    error: function logError(msg) {
      sysLog.error('ERROR', msg);
    },
  },
};
module.exports = initJaegerTracer(config, options);
