'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.SearchDataServiceWrapper = {
  drugLocation: interpret_util_1.argumentMap,
};
function SearchDataService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.SearchDataService',
    version: '1.0.0',
    methods: exports.SearchDataServiceWrapper,
  });
}
exports.SearchDataService = SearchDataService;
//generate by interpret-cli dubbo2.js
