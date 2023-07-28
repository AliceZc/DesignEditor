'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IVtmMasterRelationServiceWrapper = {
  addVtmMasterRelation: interpret_util_1.argumentMap,
  listVtmMasterRelation: interpret_util_1.argumentMap,
  deleteVtmMasterRelation: interpret_util_1.argumentMap,
  updateVtmMasterRelation: interpret_util_1.argumentMap,
};
function IVtmMasterRelationService(dubbo) {
  return dubbo.proxyService({
    dubboInterface:
      'cc.ewell.drugKnowledge.api.service.IVtmMasterRelationService',
    version: '1.0.0',
    methods: exports.IVtmMasterRelationServiceWrapper,
  });
}
exports.IVtmMasterRelationService = IVtmMasterRelationService;
//generate by interpret-cli dubbo2.js
