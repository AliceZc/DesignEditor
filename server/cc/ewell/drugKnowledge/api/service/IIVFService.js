'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IIVFServiceWrapper = {
  queryFluidRegimenList: interpret_util_1.argumentMap,
};
function IIVFService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.drugKnowledge.api.service.IIVFService',
    version: '1.0.0',
    methods: exports.IIVFServiceWrapper,
  });
}
exports.IIVFService = IIVFService;
//generate by interpret-cli dubbo2.js
