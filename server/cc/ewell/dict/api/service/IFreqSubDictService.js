'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IFreqSubDictServiceWrapper = {
  querySubFreqOrList: interpret_util_1.argumentMap,
  queryFreqSubList: interpret_util_1.argumentMap,
};
function IFreqSubDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IFreqSubDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IFreqSubDictServiceWrapper,
  });
}
exports.IFreqSubDictService = IFreqSubDictService;
//generate by interpret-cli dubbo2.js
