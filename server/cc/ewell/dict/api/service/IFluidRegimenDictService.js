'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IFluidRegimenDictServiceWrapper = {
  queryAll: interpret_util_1.argumentMap,
};
function IFluidRegimenDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IFluidRegimenDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IFluidRegimenDictServiceWrapper,
  });
}
exports.IFluidRegimenDictService = IFluidRegimenDictService;
//generate by interpret-cli dubbo2.js
