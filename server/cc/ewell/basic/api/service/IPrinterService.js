'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPrinterServiceWrapper = {
  alterPrinterInfo: interpret_util_1.argumentMap,
  printerItem: interpret_util_1.argumentMap,
  addPrinterInfo: interpret_util_1.argumentMap,
  selectPrinterInfo: interpret_util_1.argumentMap,
  delPrinterInfo: interpret_util_1.argumentMap,
};
function IPrinterService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.basic.api.service.IPrinterService',
    version: '1.0.0',
    methods: exports.IPrinterServiceWrapper,
  });
}
exports.IPrinterService = IPrinterService;
//generate by interpret-cli dubbo2.js
