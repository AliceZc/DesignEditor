'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.PrintServiceWrapper = {
  printList: interpret_util_1.argumentMap,
  addPrint: interpret_util_1.argumentMap,
};
function PrintService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.PrintService',
    version: '1.0.0',
    methods: exports.PrintServiceWrapper,
  });
}
exports.PrintService = PrintService;
//generate by interpret-cli dubbo2.js
