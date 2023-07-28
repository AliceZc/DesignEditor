'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPatInfoDubboServiceWrapper = {
  querySinglePatInfo: interpret_util_1.argumentMap,
  savePatientDetail: interpret_util_1.argumentMap,
  searchPatient: interpret_util_1.argumentMap,
  queryPatientVisitInfo: interpret_util_1.argumentMap,
  queryPatientAppointmentInfo: interpret_util_1.argumentMap,
};
function IPatInfoDubboService(dubbo) {
  return dubbo.proxyService({
    dubboInterface:
      'cc.ewell.pas.pat.service.dubbo.internal.IPatInfoDubboService',
    methods: exports.IPatInfoDubboServiceWrapper,
    version: '1.0.0',
  });
}
exports.IPatInfoDubboService = IPatInfoDubboService;
//generate by interpret-cli dubbo2.js
