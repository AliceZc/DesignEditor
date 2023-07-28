'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IBloodDictServiceWrapper = {
  queryBloodDict: interpret_util_1.argumentMap,
};
function IBloodDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IBloodDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IBloodDictServiceWrapper,
  });
}
exports.IBloodDictService = IBloodDictService;
//generate by interpret-cli dubbo2.js
