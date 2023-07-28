'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDosageRouteDictServiceWrapper = {
  queryAll: interpret_util_1.argumentMap,
};
function IDosageRouteDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IDosageRouteDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IDosageRouteDictServiceWrapper,
  });
}
exports.IDosageRouteDictService = IDosageRouteDictService;
//generate by interpret-cli dubbo2.js
