'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.SupplyAreaRelationServiceWrapper = {
  querySupplyArea: interpret_util_1.argumentMap,
  deleteSupplyArea: interpret_util_1.argumentMap,
  addSupplyArea: interpret_util_1.argumentMap,
};
function SupplyAreaRelationService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.SupplyAreaRelationService',
    version: '1.0.0',
    methods: exports.SupplyAreaRelationServiceWrapper,
  });
}
exports.SupplyAreaRelationService = SupplyAreaRelationService;
//generate by interpret-cli dubbo2.js
