'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.PatientServiceWrapper = {
  listPatientWithNewOrder: interpret_util_1.argumentMap,
};
function PatientService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.inpatient.api.service.PatientService',
    methods: exports.PatientServiceWrapper,
  });
}
exports.PatientService = PatientService;
//generate by interpret-cli dubbo2.js
