'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDrugStoreFromMoeServiceWrapper = {
  pharmacistPatchVerify: interpret_util_1.argumentMap,
};
function IDrugStoreFromMoeService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IDrugStoreFromMoeService',
    version: '1.0.0',
    methods: exports.IDrugStoreFromMoeServiceWrapper,
  });
}
exports.IDrugStoreFromMoeService = IDrugStoreFromMoeService;
//generate by interpret-cli dubbo2.js
