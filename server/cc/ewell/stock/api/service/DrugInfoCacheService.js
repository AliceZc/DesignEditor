'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DrugInfoCacheServiceWrapper = {
  infoCache: interpret_util_1.argumentMap,
};
function DrugInfoCacheService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.DrugInfoCacheService',
    version: '1.0.0',
    methods: exports.DrugInfoCacheServiceWrapper,
  });
}
exports.DrugInfoCacheService = DrugInfoCacheService;
//generate by interpret-cli dubbo2.js
