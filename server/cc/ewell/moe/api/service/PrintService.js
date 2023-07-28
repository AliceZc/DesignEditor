'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.PrintServiceWrapper = {
  printOrder: interpret_util_1.argumentMap,
  printPrescription: interpret_util_1.argumentMap,
};
function PrintService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.PrintService',
    version: '1.0.0',
    methods: exports.PrintServiceWrapper,
  });
}
exports.PrintService = PrintService;
//generate by interpret-cli dubbo2.js
