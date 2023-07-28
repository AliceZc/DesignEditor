'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.StockInventoryServiceWrapper = {
  stockInventoryDetailList: interpret_util_1.argumentMap,
  logicDeleteById: interpret_util_1.argumentMap,
  typeList: interpret_util_1.argumentMap,
  typeOfAmpList: interpret_util_1.argumentMap,
  addStockInventory: interpret_util_1.argumentMap,
  stockInventoryList: interpret_util_1.argumentMap,
  stockInventoryListAdj: interpret_util_1.argumentMap,
  lockOperator: interpret_util_1.argumentMap,
};
function StockInventoryService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.StockInventoryService',
    version: '1.0.0',
    methods: exports.StockInventoryServiceWrapper,
  });
}
exports.StockInventoryService = StockInventoryService;
//generate by interpret-cli dubbo2.js
