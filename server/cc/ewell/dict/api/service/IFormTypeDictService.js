'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IFormTypeDictServiceWrapper = {
  queryBySerialNoOrCode: interpret_util_1.argumentMap,
  queryAll: interpret_util_1.argumentMap,
};
function IFormTypeDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IFormTypeDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IFormTypeDictServiceWrapper,
  });
}
exports.IFormTypeDictService = IFormTypeDictService;
//generate by interpret-cli dubbo2.js
