'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IFluidDetailDictServiceWrapper = {
  queryAll: interpret_util_1.argumentMap,
};
function IFluidDetailDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IFluidDetailDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IFluidDetailDictServiceWrapper,
  });
}
exports.IFluidDetailDictService = IFluidDetailDictService;
//generate by interpret-cli dubbo2.js
