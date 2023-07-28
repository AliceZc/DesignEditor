'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.StockMedicationPayServiceWrapper = {
  addPayData: interpret_util_1.argumentMap,
};
function StockMedicationPayService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.StockMedicationPayService',
    version: '1.0.0',
    methods: exports.StockMedicationPayServiceWrapper,
  });
}
exports.StockMedicationPayService = StockMedicationPayService;
//generate by interpret-cli dubbo2.js
