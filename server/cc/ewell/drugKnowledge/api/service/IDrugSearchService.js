'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDrugSearchServiceWrapper = {
  listSolution: interpret_util_1.argumentMap,
  searchDrug: interpret_util_1.argumentMap,
  searchDrugTree: interpret_util_1.argumentMap,
};
function IDrugSearchService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.drugKnowledge.api.service.IDrugSearchService',
    version: '1.0.0',
    methods: exports.IDrugSearchServiceWrapper,
  });
}
exports.IDrugSearchService = IDrugSearchService;
//generate by interpret-cli dubbo2.js
