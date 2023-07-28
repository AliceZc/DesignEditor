'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IAppointmentDubboServiceWrapper = {
  saveAppointment: interpret_util_1.argumentMap,
  queryAppointmentList: interpret_util_1.argumentMap,
  queryHCPAppointment: interpret_util_1.argumentMap,
  queryAppointmentInOverlap: interpret_util_1.argumentMap,
  deleteAppointment: interpret_util_1.argumentMap,
  queryAppointmentHistory: interpret_util_1.argumentMap,
  queryAppointmentDetail: interpret_util_1.argumentMap,
};
function IAppointmentDubboService(dubbo) {
  return dubbo.proxyService({
    dubboInterface:
      'cc.ewell.pas.pat.service.dubbo.internal.IAppointmentDubboService',
    methods: exports.IAppointmentDubboServiceWrapper,
    version: '1.0.0',
  });
}
exports.IAppointmentDubboService = IAppointmentDubboService;
//generate by interpret-cli dubbo2.js
