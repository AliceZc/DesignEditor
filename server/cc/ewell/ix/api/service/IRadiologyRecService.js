'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IRadiologyRecServiceWrapper = {
  insertRadiology: interpret_util_1.argumentMap,
  editRadiology: interpret_util_1.argumentMap,
  deleteRadiology: interpret_util_1.argumentMap,
  radiologyList: interpret_util_1.argumentMap,
  queryRadiology: interpret_util_1.argumentMap,
  costStatistics: interpret_util_1.argumentMap,
  radNewCostStatistics: interpret_util_1.argumentMap,
  addRelation: interpret_util_1.argumentMap,
  deleteRelation: interpret_util_1.argumentMap,
  queryMedicationHistory: interpret_util_1.argumentMap, //查指标数据
  updateMedicationHistory: interpret_util_1.argumentMap, //保存指标数据
  addRadiologyNote: interpret_util_1.argumentMap,
  queryRadiologyNote: interpret_util_1.argumentMap,
  updateAcknowledgeStatusByExamNo: interpret_util_1.argumentMap,
  queryRadiologyReport: interpret_util_1.argumentMap,
  queryReportWithRadiology: interpret_util_1.argumentMap,
  queryIpRadiologyList: interpret_util_1.argumentMap,
  queryRadiologyPrint: interpret_util_1.argumentMap,
  packageCostStatistics: interpret_util_1.argumentMap,
  comboCostStatistics: interpret_util_1.argumentMap,
  insertCombo: interpret_util_1.argumentMap,
  selectVerbalRadiologyList: interpret_util_1.argumentMap,
  exportVerbalRadiologyExcel: interpret_util_1.argumentMap,
  getVerbalRadiologyNum: interpret_util_1.argumentMap,
};
function IRadiologyRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.ix.api.service.IRadiologyRecService',
    version: '1.0.0',
    methods: exports.IRadiologyRecServiceWrapper,
  });
}
exports.IRadiologyRecService = IRadiologyRecService;
//generate by interpret-cli dubbo2.js
