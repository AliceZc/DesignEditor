'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DrugStockMinServiceWrapper = {
  overQtyList: interpret_util_1.argumentMap,
  addMin: interpret_util_1.argumentMap,
  upQty: interpret_util_1.argumentMap,
};
function DrugStockMinService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.DrugStockMinService',
    version: '1.0.0',
    methods: exports.DrugStockMinServiceWrapper,
  });
}
exports.DrugStockMinService = DrugStockMinService;
//generate by interpret-cli dubbo2.js
