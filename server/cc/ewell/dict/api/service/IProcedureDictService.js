'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IProcedureDictServiceWrapper = {
  queryByCode: interpret_util_1.argumentMap,
  queryAll: interpret_util_1.argumentMap,
};
function IProcedureDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IProcedureDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IProcedureDictServiceWrapper,
  });
}
exports.IProcedureDictService = IProcedureDictService;
//generate by interpret-cli dubbo2.js
