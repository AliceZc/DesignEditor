'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IClinicInformationServiceWrapper = {
  editChiefComplaintByPatId: interpret_util_1.argumentMap,
  queryChiefComplaintByPatId: interpret_util_1.argumentMap,
};
function IClinicInformationService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IClinicInformationService',
    version: '1.0.0',
    methods: exports.IClinicInformationServiceWrapper,
  });
}
exports.IClinicInformationService = IClinicInformationService;
//generate by interpret-cli dubbo2.js
