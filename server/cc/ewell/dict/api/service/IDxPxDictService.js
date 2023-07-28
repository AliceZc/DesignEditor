'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDxPxDictServiceWrapper = {
  queryDxPxDict: interpret_util_1.argumentMap,
};
function IDxPxDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.infra.IDxPxDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IDxPxDictServiceWrapper,
  });
}
exports.IDxPxDictService = IDxPxDictService;
//generate by interpret-cli dubbo2.js
