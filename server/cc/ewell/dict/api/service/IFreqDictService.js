'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IFreqDictServiceWrapper = {
  queryFreqList: interpret_util_1.argumentMap,
  queryFreq: interpret_util_1.argumentMap,
};
function IFreqDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IFreqDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IFreqDictServiceWrapper,
  });
}
exports.IFreqDictService = IFreqDictService;
//generate by interpret-cli dubbo2.js
