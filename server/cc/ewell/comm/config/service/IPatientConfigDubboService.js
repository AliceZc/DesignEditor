'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPatientConfigDubboServiceWrapper = {
  queryPatRemarkConfig: interpret_util_1.argumentMap,
  savePatRemarkConfig: interpret_util_1.argumentMap,
};
function IPatientConfigDubboService(dubbo) {
  return dubbo.proxyService({
    dubboInterface:
      'cc.ewell.comm.config.service.dubbo.IPatientConfigDubboService',
    version: '1.0.0',
    methods: exports.IPatientConfigDubboServiceWrapper,
  });
}
exports.IPatientConfigDubboService = IPatientConfigDubboService;
//generate by interpret-cli dubbo2.js
