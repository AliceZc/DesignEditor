'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IVmpItemBnfRelationServiceWrapper = {
  addOrUpdateList: interpret_util_1.argumentMap,
  selectByVmpItemCode: interpret_util_1.argumentMap,
  deleteByVmpItemCode: interpret_util_1.argumentMap,
};
function IVmpItemBnfRelationService(dubbo) {
  return dubbo.proxyService({
    dubboInterface:
      'cc.ewell.drugKnowledge.api.service.IVmpItemBnfRelationService',
    version: '1.0.0',
    methods: exports.IVmpItemBnfRelationServiceWrapper,
  });
}
exports.IVmpItemBnfRelationService = IVmpItemBnfRelationService;
//generate by interpret-cli dubbo2.js
