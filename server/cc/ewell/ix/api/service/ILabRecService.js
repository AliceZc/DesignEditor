'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ILabRecServiceWrapper = {
  insertLab: interpret_util_1.argumentMap,
  queryLabList: interpret_util_1.argumentMap,
  queryLab: interpret_util_1.argumentMap,
  modifyLab: interpret_util_1.argumentMap,
  deleteLab: interpret_util_1.argumentMap,
  addRelation: interpret_util_1.argumentMap,
  deleteRelation: interpret_util_1.argumentMap,
  queryMergeSpecimenList: interpret_util_1.argumentMap,
  queryFileReport: interpret_util_1.argumentMap,
  addReportNote: interpret_util_1.argumentMap,
  queryLabReportNote: interpret_util_1.argumentMap,
  updateAcknowledgeStatusByExamNo: interpret_util_1.argumentMap,
  queryReportWithLab: interpret_util_1.argumentMap,
  resentToLis: interpret_util_1.argumentMap,
  queryLabDashboardInfoList: interpret_util_1.argumentMap,
  queryLabDashboardSimpleCount: interpret_util_1.argumentMap,
  getInvestigationInMonth: interpret_util_1.argumentMap,
  getInvestigation: interpret_util_1.argumentMap,
  queryIpLabOrderList: interpret_util_1.argumentMap,
  queryLabPrint: interpret_util_1.argumentMap,
  checkSameLab: interpret_util_1.argumentMap,
};
function ILabRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.ix.api.service.ILabRecService',
    version: '1.0.0',
    methods: exports.ILabRecServiceWrapper,
  });
}
exports.ILabRecService = ILabRecService;
//generate by interpret-cli dubbo2.js
