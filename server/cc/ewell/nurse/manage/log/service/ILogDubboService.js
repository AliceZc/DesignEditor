'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ILogDubboServiceWrapper = {
  addLog: interpret_util_1.argumentMap,
};
function ILogDubboService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.nurse.manage.log.service.ILogDubboService',
    version: '1.0.0',
    methods: exports.ILogDubboServiceWrapper,
  });
}
exports.ILogDubboService = ILogDubboService;
//generate by interpret-cli dubbo2.js
