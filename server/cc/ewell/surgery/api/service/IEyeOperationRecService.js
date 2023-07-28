'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IEyeOperationRecServiceWrapper = {
  addEyeOperation: interpret_util_1.argumentMap,
  updateEyeOperation: interpret_util_1.argumentMap,
  deleteEyeOperation: interpret_util_1.argumentMap,
  queryEyeOperation: interpret_util_1.argumentMap,
  queryEyeOperationList: interpret_util_1.argumentMap,
  addAppointmentEvaluation: interpret_util_1.argumentMap,
  queryAppointmentEvaluation: interpret_util_1.argumentMap,
  addTimeOutInfo: interpret_util_1.argumentMap,
  getTimeOutInfo: interpret_util_1.argumentMap,
  getConsentListByPatId: interpret_util_1.argumentMap,
  getConsentInfoById: interpret_util_1.argumentMap,
  deleteDocumentById: interpret_util_1.argumentMap,
  batchUpdateDocumentTag: interpret_util_1.argumentMap,
  getOperationId: interpret_util_1.argumentMap,
  completeEyeOperationRec: interpret_util_1.argumentMap,
};
function IEyeOperationRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.IEyeOperationRecService',
    version: '1.0.0',
    methods: exports.IEyeOperationRecServiceWrapper,
  });
}
exports.IEyeOperationRecService = IEyeOperationRecService;
//generate by interpret-cli dubbo2.js
