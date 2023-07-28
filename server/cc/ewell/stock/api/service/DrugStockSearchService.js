'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DrugStockSearchServiceWrapper = {
  drugStockSearch: interpret_util_1.argumentMap,
  drugStock: interpret_util_1.argumentMap,
  drugStockList: interpret_util_1.argumentMap,
  drugInfoByBatchNo: interpret_util_1.argumentMap,
  occupyStock: interpret_util_1.argumentMap,
  getBusiType: interpret_util_1.argumentMap,
  itemCodeList: interpret_util_1.argumentMap,
  operateStock: interpret_util_1.argumentMap,
  itemStockAndInfo: interpret_util_1.argumentMap,
  wholeTakeList: interpret_util_1.argumentMap,
  operatorHis: interpret_util_1.argumentMap,
  isBatchNoExist: interpret_util_1.argumentMap,
};
function DrugStockSearchService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.DrugStockSearchService',
    version: '1.0.0',
    methods: exports.DrugStockSearchServiceWrapper,
  });
}
exports.DrugStockSearchService = DrugStockSearchService;
//generate by interpret-cli dubbo2.js
