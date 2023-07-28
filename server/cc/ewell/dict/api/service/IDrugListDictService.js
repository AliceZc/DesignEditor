'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDrugListDictServiceWrapper = {
  drugQuery: interpret_util_1.argumentMap,
  query: interpret_util_1.argumentMap,
  queryAll: interpret_util_1.argumentMap,
};
function IDrugListDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IDrugListDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IDrugListDictServiceWrapper,
  });
}
exports.IDrugListDictService = IDrugListDictService;
//generate by interpret-cli dubbo2.js
