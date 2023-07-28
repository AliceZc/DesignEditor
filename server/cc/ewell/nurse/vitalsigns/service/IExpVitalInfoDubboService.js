'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IExpVitalInfoDubboServiceWrapper = {
  savePoctInfo: interpret_util_1.argumentMap,
  getVitalInfoJoinByVisitNoList: interpret_util_1.argumentMap,
};
function IExpVitalInfoDubboService(dubbo) {
  return dubbo.proxyService({
    dubboInterface:
      'cc.ewell.nurse.vitalsigns.service.IExpVitalInfoDubboService',
    version: '1.0.0',
    methods: exports.IExpVitalInfoDubboServiceWrapper,
  });
}
exports.IExpVitalInfoDubboService = IExpVitalInfoDubboService;
//generate by interpret-cli dubbo2.js
