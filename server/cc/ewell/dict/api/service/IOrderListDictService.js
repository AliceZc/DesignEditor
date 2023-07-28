'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOrderListDictServiceWrapper = {
  queryOrderListDict: interpret_util_1.argumentMap,
  queryOrderDict: interpret_util_1.argumentMap,
  queryOrderFrequencyDict: interpret_util_1.argumentMap,
};
function IOrderListDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IOrderListDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IOrderListDictServiceWrapper,
  });
}
exports.IOrderListDictService = IOrderListDictService;
//generate by interpret-cli dubbo2.js
