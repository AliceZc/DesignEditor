'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.EmrServiceWrapper = {
  getCurrentExamItems: interpret_util_1.argumentMap,
  getCPOEWay: interpret_util_1.argumentMap,
  getTransInfoByInvisitIDAndName: interpret_util_1.argumentMap,
  selectExamResultListByInpvisitID: interpret_util_1.argumentMap,
  getPatientLISInfo: interpret_util_1.argumentMap,
  getPatientCPOEInfo: interpret_util_1.argumentMap,
  getCPOEFrequency: interpret_util_1.argumentMap,
  getDiagnosisByInpvisit: interpret_util_1.argumentMap,
  queryPatientHomeByPatId: interpret_util_1.argumentMap,
  getChiefComplaintByInvisitID: interpret_util_1.argumentMap,
  getCurrentLabItems: interpret_util_1.argumentMap,
  getDeptList: interpret_util_1.argumentMap,
  getPatientPACSInfo: interpret_util_1.argumentMap,
  getDiagnosisInfo: interpret_util_1.argumentMap,
  saveDiagnosisInfo: interpret_util_1.argumentMap,
  getDiagnosisByInpvisitName: interpret_util_1.argumentMap,
  getCPOEType: interpret_util_1.argumentMap,
  queryPatInfor: interpret_util_1.argumentMap,
  getInpDiagnosis: interpret_util_1.argumentMap,
  selectLabListWithResultByInpvisitID: interpret_util_1.argumentMap,
  getSavePathwayDocInfo: interpret_util_1.argumentMap,
};
function EmrService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.doc.service.inner.dubbo.EmrService',
    version: 'V-0.0.1',
    methods: exports.EmrServiceWrapper,
  });
}
exports.EmrService = EmrService;
//generate by interpret-cli dubbo2.js
