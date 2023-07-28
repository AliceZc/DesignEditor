'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.OperationRecServiceWrapper = {
  getOperationRecByBusiNo: interpret_util_1.argumentMap,
};
function OperationRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.OperationRecService',
    version: '1.0.0',
    methods: exports.OperationRecServiceWrapper,
  });
}
exports.OperationRecService = OperationRecService;
//generate by interpret-cli dubbo2.js
