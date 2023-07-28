'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDrugCategoryDictServiceWrapper = {
  queryBySerialNoOrCode: interpret_util_1.argumentMap,
  queryAll: interpret_util_1.argumentMap,
};
function IDrugCategoryDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IDrugCategoryDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IDrugCategoryDictServiceWrapper,
  });
}
exports.IDrugCategoryDictService = IDrugCategoryDictService;
//generate by interpret-cli dubbo2.js
