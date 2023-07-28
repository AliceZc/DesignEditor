'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPatMedicalRecServiceWrapper = {
  queryMedicalHistory: interpret_util_1.argumentMap,
  getTriageChiefComplain: interpret_util_1.argumentMap,
  submitMedicalHistory: interpret_util_1.argumentMap,
  saveTemplate: interpret_util_1.argumentMap,
  exportTemplate: interpret_util_1.argumentMap,
  updateStatus: interpret_util_1.argumentMap,
  queryPrintAdmAndConNote: interpret_util_1.argumentMap,
  queryPrintAdmissionLetter: interpret_util_1.argumentMap,
};
function IPatMedicalRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IPatMedicalRecService',
    version: '1.0.0',
    methods: exports.IPatMedicalRecServiceWrapper,
  });
}
exports.IPatMedicalRecService = IPatMedicalRecService;
//generate by interpret-cli dubbo2.js
