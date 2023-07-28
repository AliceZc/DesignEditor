'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOperationOptServiceWrapper = {
  addOperationOpt: interpret_util_1.argumentMap,
  queryOperationRecord: interpret_util_1.argumentMap,
  queryOptData: interpret_util_1.argumentMap,
  deleteOperationRecord: interpret_util_1.argumentMap,
};
function IOperationOptService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.IOperationOptService',
    version: '1.0.0',
    methods: exports.IOperationOptServiceWrapper,
  });
}
exports.IOperationOptService = IOperationOptService;
//generate by interpret-cli dubbo2.js
