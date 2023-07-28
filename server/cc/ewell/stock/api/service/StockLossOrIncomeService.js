'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.StockLossOrIncomeServiceWrapper = {
  stockLossOrIncomeDetailList: interpret_util_1.argumentMap,
  listStockLossOrIncomeByPage: interpret_util_1.argumentMap,
  addStockLossOrIncome: interpret_util_1.argumentMap,
  detailDeleteById: interpret_util_1.argumentMap,
};
function StockLossOrIncomeService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.StockLossOrIncomeService',
    version: '1.0.0',
    methods: exports.StockLossOrIncomeServiceWrapper,
  });
}
exports.StockLossOrIncomeService = StockLossOrIncomeService;
//generate by interpret-cli dubbo2.js
