'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ICheckoutListDictServiceWrapper = {
  queryListByParams: interpret_util_1.argumentMap,
};
function ICheckoutListDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.ICheckoutListDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.ICheckoutListDictServiceWrapper,
  });
}
exports.ICheckoutListDictService = ICheckoutListDictService;
//generate by interpret-cli dubbo2.js
