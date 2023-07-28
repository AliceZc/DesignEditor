'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDrugStoreServiceWrapper = {
  pharmacistVerify: interpret_util_1.argumentMap,
};
function IDrugStoreService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IDrugStoreService',
    version: '1.0.0',
    methods: exports.IDrugStoreServiceWrapper,
  });
}
exports.IDrugStoreService = IDrugStoreService;
//generate by interpret-cli dubbo2.js
