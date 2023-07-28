'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDrugNamesServiceWrapper = {
  batchUpdateDrugNames: interpret_util_1.argumentMap,
  listDrugNames: interpret_util_1.argumentMap,
  addDrugNames: interpret_util_1.argumentMap,
  batchDeleteDrugNames: interpret_util_1.argumentMap,
  updateDrugNames: interpret_util_1.argumentMap,
};
function IDrugNamesService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.drugKnowledge.api.service.IDrugNamesService',
    version: '1.0.0',
    methods: exports.IDrugNamesServiceWrapper,
  });
}
exports.IDrugNamesService = IDrugNamesService;
//generate by interpret-cli dubbo2.js
