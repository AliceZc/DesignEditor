'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IHospitalInfoServiceWrapper = {
  queryHospitalInfo: interpret_util_1.argumentMap,
  updateHospitalInfo: interpret_util_1.argumentMap,
  queryHospitalInfoPathById: interpret_util_1.argumentMap,
  deleteHospitalInfo: interpret_util_1.argumentMap,
};
function IHospitalInfoService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.basic.api.service.IHospitalInfoService',
    version: '1.0.0',
    methods: exports.IHospitalInfoServiceWrapper,
  });
}
exports.IHospitalInfoService = IHospitalInfoService;
//generate by interpret-cli dubbo2.js
