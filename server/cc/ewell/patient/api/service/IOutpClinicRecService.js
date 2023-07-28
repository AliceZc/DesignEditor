'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOutpClinicRecServiceWrapper = {
  changePatientVisit: interpret_util_1.argumentMap,
  editPatientVisitStatus: interpret_util_1.argumentMap,
  queryOutpPatientsByConsulStatus: interpret_util_1.argumentMap,
  queryOutpPatientsList: interpret_util_1.argumentMap,
  save: interpret_util_1.argumentMap,
  queryOutPatientByPatId: interpret_util_1.argumentMap,
  queryHistoryOuptClinic: interpret_util_1.argumentMap,
  queryVisitSummaryPatient: interpret_util_1.argumentMap,
  followUpStatus: interpret_util_1.argumentMap,
  checkIn: interpret_util_1.argumentMap,
  checkOut: interpret_util_1.argumentMap,
  queryOpPatientList: interpret_util_1.argumentMap,
  isExistConsultInProgressPatient: interpret_util_1.argumentMap,
  callPatient: interpret_util_1.argumentMap,
  takeInPatient: interpret_util_1.argumentMap,
  endConsultPatient: interpret_util_1.argumentMap,
  reVisitPatient: interpret_util_1.argumentMap,
  addCheckOutList: interpret_util_1.argumentMap,
  getCheckOutListByVisitNo: interpret_util_1.argumentMap,
  queryOpPatientByEpisideNoAndCumcNo: interpret_util_1.argumentMap,
};
function IOutpClinicRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IOutpClinicRecService',
    version: '1.0.0',
    methods: exports.IOutpClinicRecServiceWrapper,
  });
}
exports.IOutpClinicRecService = IOutpClinicRecService;
//generate by interpret-cli dubbo2.js
