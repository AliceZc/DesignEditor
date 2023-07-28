const DirectlyDubbo = require('apache-dubbo2-js').DirectlyDubbo;
const service = require('./service');
const registerAddress = '192.168.198.124:32181';
// const registerAddress = '10.1.25.227:20887'

const dubbo = DirectlyDubbo.from({
  dubboAddress: registerAddress,
  dubboVersion: '1.0.0',
  dubboInvokeTimeout: 60,
});
let DirectlyService = {};
Object.keys(service).forEach(function (key) {
  DirectlyService[key] = service[key](dubbo);
});

module.exports = DirectlyService;
