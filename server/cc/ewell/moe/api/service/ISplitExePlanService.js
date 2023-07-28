'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ISplitExePlanServiceWrapper = {
  splitExePlan: interpret_util_1.argumentMap,
  lastExePlanDate: interpret_util_1.argumentMap,
  deleteExePlan: interpret_util_1.argumentMap,
  disExePlan: interpret_util_1.argumentMap,
  endExePlan: interpret_util_1.argumentMap,
};
function ISplitExePlanService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.ISplitExePlanService',
    version: '1.0.0',
    methods: exports.ISplitExePlanServiceWrapper,
  });
}
exports.ISplitExePlanService = ISplitExePlanService;
//generate by interpret-cli dubbo2.js
