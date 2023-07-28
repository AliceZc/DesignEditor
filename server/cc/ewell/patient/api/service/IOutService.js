'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOutServiceWrapper = {
  queryDischargeSummary: interpret_util_1.argumentMap,
  queryAllergyItems: interpret_util_1.argumentMap,
};
function IOutService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IOutService',
    version: '1.0.0',
    methods: exports.IOutServiceWrapper,
  });
}
exports.IOutService = IOutService;
//generate by interpret-cli dubbo2.js
