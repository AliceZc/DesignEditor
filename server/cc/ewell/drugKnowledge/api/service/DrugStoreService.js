'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DrugStoreServiceWrapper = {
  queryMealList: interpret_util_1.argumentMap,
  querySupplyFrequencyList: interpret_util_1.argumentMap,
  queryFrequencyList: interpret_util_1.argumentMap,
  queryConditionList: interpret_util_1.argumentMap,
  queryDoseMappingRule: interpret_util_1.argumentMap,
  queryWarningConditionList: interpret_util_1.argumentMap,
  queryDrug: interpret_util_1.argumentMap,
  queryWarningWithoutConditionList: interpret_util_1.argumentMap,
  querySupplyFrequencyListForMoe: interpret_util_1.argumentMap,
};
function DrugStoreService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.drugKnowledge.api.service.DrugStoreService',
    version: '1.0.0',
    methods: exports.DrugStoreServiceWrapper,
  });
}
exports.DrugStoreService = DrugStoreService;
//generate by interpret-cli dubbo2.js
