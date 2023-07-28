'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOperationLogServiceWrapper = {
  queryOperationLogList: interpret_util_1.argumentMap,
  queryOtPatientStatusLog: interpret_util_1.argumentMap,
  queryOperationPxLog: interpret_util_1.argumentMap,
};
function IOperationLogService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.IOperationLogService',
    version: '1.0.0',
    methods: exports.IOperationLogServiceWrapper,
  });
}
exports.IOperationLogService = IOperationLogService;
//generate by interpret-cli dubbo2.js
