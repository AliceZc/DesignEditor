'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.AisServiceWrapper = {
  queryAnaReport: interpret_util_1.argumentMap,
  queryAisOperationRec: interpret_util_1.argumentMap,
};
function AisService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.AisService',
    version: '1.0.0',
    methods: exports.AisServiceWrapper,
  });
}
exports.AisService = AisService;
//generate by interpret-cli dubbo2.js
