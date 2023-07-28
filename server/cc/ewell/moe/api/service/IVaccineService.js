'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IVaccineServiceWrapper = {
  queryPatientVaccineScheduleByPatient: interpret_util_1.argumentMap,
  queryVaccineBillingItem: interpret_util_1.argumentMap,
  addVaccineScheduleToPatient: interpret_util_1.argumentMap,
  deletePatientVaccineSchedule: interpret_util_1.argumentMap,
  updatePatientVaccineScheduleByNo: interpret_util_1.argumentMap,
  addPatientVaccineSchedule: interpret_util_1.argumentMap,
  updateTakeMedicineFlag: interpret_util_1.argumentMap,
  queryVaccineScheduleBySelect: interpret_util_1.argumentMap,
  updateIsIndicate: interpret_util_1.argumentMap,
  printPatientVaccineSchedule: interpret_util_1.argumentMap,
  queryHospitalAbbreviationList: interpret_util_1.argumentMap,
};
function IVaccineService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IVaccineService',
    version: '1.0.0',
    methods: exports.IVaccineServiceWrapper,
  });
}
exports.IVaccineService = IVaccineService;
//generate by interpret-cli dubbo2.js
