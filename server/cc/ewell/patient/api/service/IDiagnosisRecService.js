'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDiagnosisRecServiceWrapper = {
  queryDiagbosis: interpret_util_1.argumentMap,
  modifyDiagbosis: interpret_util_1.argumentMap,
  addDiagbosis: interpret_util_1.argumentMap,
  queryDiagbosisByDiagType: interpret_util_1.argumentMap,
  deleteDiagbosis: interpret_util_1.argumentMap,
  queryByDiagNo: interpret_util_1.argumentMap,
  queryDiagnosisList: interpret_util_1.argumentMap,
  queryDiagbosisByPatient: interpret_util_1.argumentMap,
  queryDiagbosisByPatientH: interpret_util_1.argumentMap,
  queryDiagnosisUsedList: interpret_util_1.argumentMap,
  queryDiagnosisListWithVisitNo: interpret_util_1.argumentMap,
  queryDiagnosisListWithVisitNoByDraft: interpret_util_1.argumentMap,
  queryDiagnosisListWithComorbidity: interpret_util_1.argumentMap,
  queryDiagnosisListWithComplication: interpret_util_1.argumentMap,
  queryDiagnosisListWithoutVisitNo: interpret_util_1.argumentMap,
  addDiagnosisOfDs: interpret_util_1.argumentMap,
  queryIsDischargeWithVisitNo: interpret_util_1.argumentMap,
  queryDiagnosisHistory: interpret_util_1.argumentMap,
  queryConsultationViewDxInfos: interpret_util_1.argumentMap,
};
function IDiagnosisRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IDiagnosisRecService',
    version: '1.0.0',
    methods: exports.IDiagnosisRecServiceWrapper,
  });
}
exports.IDiagnosisRecService = IDiagnosisRecService;
//generate by interpret-cli dubbo2.js
