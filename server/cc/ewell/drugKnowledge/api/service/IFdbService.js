'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IFdbServiceWrapper = {
  listDrugAllergen: interpret_util_1.argumentMap,
  checkDrugAllergen: interpret_util_1.argumentMap,
  checkAdverseDrugReactions: interpret_util_1.argumentMap,
  checkPregnant: interpret_util_1.argumentMap,
  checkG6PD: interpret_util_1.argumentMap,
  checkDrugInteractions: interpret_util_1.argumentMap,
  checkDrug: interpret_util_1.argumentMap,
  viewMonographForDrugInteractions: interpret_util_1.argumentMap,
};
function IFdbService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.drugKnowledge.api.service.IFdbService',
    version: '1.0.0',
    methods: exports.IFdbServiceWrapper,
  });
}
exports.IFdbService = IFdbService;
//generate by interpret-cli dubbo2.js
