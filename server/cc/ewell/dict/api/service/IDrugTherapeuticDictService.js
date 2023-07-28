'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDrugTherapeuticDictServiceWrapper = {
  queryBySerialNoOrCode: interpret_util_1.argumentMap,
  queryAll: interpret_util_1.argumentMap,
};
function IDrugTherapeuticDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IDrugTherapeuticDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IDrugTherapeuticDictServiceWrapper,
  });
}
exports.IDrugTherapeuticDictService = IDrugTherapeuticDictService;
//generate by interpret-cli dubbo2.js
