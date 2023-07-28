'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPatMedicalHistoryServiceWrapper = {
  insertPatMedicalHistory: interpret_util_1.argumentMap,
  queryLatestRecordsByPatId: interpret_util_1.argumentMap,
  queryPatMedicalHistory: interpret_util_1.argumentMap,
  queryMedHistAndPrintInfo: interpret_util_1.argumentMap,
};
function IPatMedicalHistoryService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IPatMedicalHistoryService',
    version: '1.0.0',
    methods: exports.IPatMedicalHistoryServiceWrapper,
  });
}
exports.IPatMedicalHistoryService = IPatMedicalHistoryService;
//generate by interpret-cli dubbo2.js
