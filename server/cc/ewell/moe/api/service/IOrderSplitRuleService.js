'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOrderSplitRuleServiceWrapper = {
  deleteSplitRule: interpret_util_1.argumentMap,
  addSplitRule: interpret_util_1.argumentMap,
  submitSplitList: interpret_util_1.argumentMap,
  querySplitRuleList: interpret_util_1.argumentMap,
  modifySplitRule: interpret_util_1.argumentMap,
  previewSplit: interpret_util_1.argumentMap,
  previewSplitList: interpret_util_1.argumentMap,
};
function IOrderSplitRuleService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IOrderSplitRuleService',
    version: '1.0.0',
    methods: exports.IOrderSplitRuleServiceWrapper,
  });
}
exports.IOrderSplitRuleService = IOrderSplitRuleService;
//generate by interpret-cli dubbo2.js
