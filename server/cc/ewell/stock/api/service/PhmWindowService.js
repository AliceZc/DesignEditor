'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.PhmWindowServiceWrapper = {
  addWindow: interpret_util_1.argumentMap,
  deleteWindow: interpret_util_1.argumentMap,
  modifyWindowInfo: interpret_util_1.argumentMap,
  windowList: interpret_util_1.argumentMap,
};
function PhmWindowService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.PhmWindowService',
    version: '1.0.0',
    methods: exports.PhmWindowServiceWrapper,
  });
}
exports.PhmWindowService = PhmWindowService;
//generate by interpret-cli dubbo2.js
