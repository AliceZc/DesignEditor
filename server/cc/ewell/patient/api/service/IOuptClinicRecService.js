'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOuptClinicRecServiceWrapper = {
  queryOutpPatientByStatus: interpret_util_1.argumentMap,
  queryOuptPatient: interpret_util_1.argumentMap,
};
function IOuptClinicRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IOuptClinicRecService',
    version: '1.0.0',
    methods: exports.IOuptClinicRecServiceWrapper,
  });
}
exports.IOuptClinicRecService = IOuptClinicRecService;
//generate by interpret-cli dubbo2.js
