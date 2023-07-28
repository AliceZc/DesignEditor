'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPatientAssignedServiceWrapper = {
  getPatientAssignedNurse: interpret_util_1.argumentMap,
};
function IPatientAssignedService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IPatientAssignedService',
    version: '1.0.0',
    methods: exports.IPatientAssignedServiceWrapper,
  });
}
exports.IPatientAssignedService = IPatientAssignedService;
//generate by interpret-cli dubbo2.js
