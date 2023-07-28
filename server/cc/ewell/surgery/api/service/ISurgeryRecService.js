'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ISurgeryRecServiceWrapper = {
  addOperation: interpret_util_1.argumentMap,
  deleteOperation: interpret_util_1.argumentMap,
  modifyOperation: interpret_util_1.argumentMap,
  queryOperationList: interpret_util_1.argumentMap,
  queryOperations: interpret_util_1.argumentMap,
  querySurgeryUsedList: interpret_util_1.argumentMap,
  queryOperationListByPatIdWithVisitNo: interpret_util_1.argumentMap,
  queryOperationListByPatIdWithVisitNoAndDraft: interpret_util_1.argumentMap,
  queryOperationListByPatIdWithoutVisitNo: interpret_util_1.argumentMap,
  addOperationOfDs: interpret_util_1.argumentMap,
  queryOperationHistory: interpret_util_1.argumentMap,
};
function ISurgeryRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.ISurgeryRecService',
    version: '1.0.0',
    methods: exports.ISurgeryRecServiceWrapper,
  });
}
exports.ISurgeryRecService = ISurgeryRecService;
//generate by interpret-cli dubbo2.js
