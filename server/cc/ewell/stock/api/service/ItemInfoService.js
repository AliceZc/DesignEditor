'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ItemInfoServiceWrapper = {
  stockInfo: interpret_util_1.argumentMap,
  itemInfoSearch: interpret_util_1.argumentMap,
};
function ItemInfoService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.ItemInfoService',
    version: '1.0.0',
    methods: exports.ItemInfoServiceWrapper,
  });
}
exports.ItemInfoService = ItemInfoService;
//generate by interpret-cli dubbo2.js
