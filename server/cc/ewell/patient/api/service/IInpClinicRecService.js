'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IInpClinicRecServiceWrapper = {
  queryPatientBySatust: interpret_util_1.argumentMap,
  queryInpPatientByInpNo: interpret_util_1.argumentMap,
  queryTypeNum: interpret_util_1.argumentMap,
  queryInpPatientByPatId: interpret_util_1.argumentMap,
  queryInpClinicRecList: interpret_util_1.argumentMap,
  updateTime: interpret_util_1.argumentMap,
  queryAlert: interpret_util_1.argumentMap,
  queryInpsBySelect: interpret_util_1.argumentMap,
  getPatientsAndNumBySelect: interpret_util_1.argumentMap,
  queryPatientAlert: interpret_util_1.argumentMap,
  queryHistoryInpPatient: interpret_util_1.argumentMap,
  queryPatientPackage: interpret_util_1.argumentMap,
  queryPackageList: interpret_util_1.argumentMap,
  changePatientType: interpret_util_1.argumentMap,
  queryMortuaryPatientByPatId: interpret_util_1.argumentMap,
};
function IInpClinicRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IInpClinicRecService',
    version: '1.0.0',
    methods: exports.IInpClinicRecServiceWrapper,
  });
}
exports.IInpClinicRecService = IInpClinicRecService;
//generate by interpret-cli dubbo2.js
