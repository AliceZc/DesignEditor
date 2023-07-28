'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOperationRoomRuleServiceWrapper = {
  saveOtRoomRules: interpret_util_1.argumentMap,
  saveRoomRuleSession: interpret_util_1.argumentMap,
  queryRoomRulesList: interpret_util_1.argumentMap,
};
function IOperationRoomRuleService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.IOperationRoomRuleService',
    version: '1.0.0',
    methods: exports.IOperationRoomRuleServiceWrapper,
  });
}
exports.IOperationRoomRuleService = IOperationRoomRuleService;
//generate by interpret-cli dubbo2.js
