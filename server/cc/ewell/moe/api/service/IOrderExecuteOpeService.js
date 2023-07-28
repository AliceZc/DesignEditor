'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOrderExecuteOpeServiceWrapper = {
  insertOrderExeOpe: interpret_util_1.argumentMap,
  listOrderExeDealRec: interpret_util_1.argumentMap,
  patchInsertOrderExeOpe: interpret_util_1.argumentMap,
  resetStatusExecutionPlanWithWrongEntry: interpret_util_1.argumentMap,
};
function IOrderExecuteOpeService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IOrderExecuteOpeService',
    version: '1.0.0',
    methods: exports.IOrderExecuteOpeServiceWrapper,
  });
}
exports.IOrderExecuteOpeService = IOrderExecuteOpeService;
//generate by interpret-cli dubbo2.js
