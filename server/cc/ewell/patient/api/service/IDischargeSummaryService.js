'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDischargeSummaryServiceWrapper = {
  modifyDischargeSummary: interpret_util_1.argumentMap,
};
function IDischargeSummaryService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IDischargeSummaryService',
    version: '1.0.0',
    methods: exports.IDischargeSummaryServiceWrapper,
  });
}
exports.IDischargeSummaryService = IDischargeSummaryService;
//generate by interpret-cli dubbo2.js
