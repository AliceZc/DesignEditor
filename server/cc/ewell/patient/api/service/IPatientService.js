'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPatientServiceWrapper = {
  updatePatAllergy: interpret_util_1.argumentMap,
  queryAllInpPatient: interpret_util_1.argumentMap,
  updateDeathStatus: interpret_util_1.argumentMap,
  addDischargeSummary: interpret_util_1.argumentMap,
  queryDraftFlag: interpret_util_1.argumentMap,
  queryPatientDoctorList: interpret_util_1.argumentMap,
  queryOperationPatientList: interpret_util_1.argumentMap,
  queryIfExistPaidBill: interpret_util_1.argumentMap,
};
function IPatientService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IPatientService',
    version: '1.0.0',
    methods: exports.IPatientServiceWrapper,
  });
}
exports.IPatientService = IPatientService;
//generate by interpret-cli dubbo2.js
