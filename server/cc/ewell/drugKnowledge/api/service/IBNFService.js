'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IBNFServiceWrapper = { subListBNF: interpret_util_1.argumentMap };
function IBNFService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.drugKnowledge.api.service.IBNFService',
    version: '1.0.0',
    methods: exports.IBNFServiceWrapper,
  });
}
exports.IBNFService = IBNFService;
//generate by interpret-cli dubbo2.js
