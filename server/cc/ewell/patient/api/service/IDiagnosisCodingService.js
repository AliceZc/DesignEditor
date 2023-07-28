'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDiagnosisCodingServiceWrapper = {
  saveCodedDiagnosisRec: interpret_util_1.argumentMap,
};
function IDiagnosisCodingService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IDiagnosisCodingService',
    version: '1.0.0',
    methods: exports.IDiagnosisCodingServiceWrapper,
  });
}
exports.IDiagnosisCodingService = IDiagnosisCodingService;
//generate by interpret-cli dubbo2.js
