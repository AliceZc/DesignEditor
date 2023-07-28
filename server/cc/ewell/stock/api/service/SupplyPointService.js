'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.SupplyPointServiceWrapper = {
  queryWsSupplyPoint: interpret_util_1.argumentMap,
};
function SupplyPointService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.SupplyPointService',
    version: '1.0.0',
    methods: exports.SupplyPointServiceWrapper,
  });
}
exports.SupplyPointService = SupplyPointService;
//generate by interpret-cli dubbo2.js
