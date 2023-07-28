'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IMedicalRecServiceWrapper = {
  editMedicalHistory: interpret_util_1.argumentMap,
  queryMedicalHistory: interpret_util_1.argumentMap,
};
function IMedicalRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IMedicalRecService',
    version: '1.0.0',
    methods: exports.IMedicalRecServiceWrapper,
  });
}
exports.IMedicalRecService = IMedicalRecService;
//generate by interpret-cli dubbo2.js
