'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPhysioReportServiceWrapper = {
  queryPhysioThreapy: interpret_util_1.argumentMap,
  queryPhysioReport: interpret_util_1.argumentMap,
  queryReport: interpret_util_1.argumentMap,
  insertPhysioReport: interpret_util_1.argumentMap,
  queryDischargeReport: interpret_util_1.argumentMap,
  insertPhysioDischarge: interpret_util_1.argumentMap,
  queryAllDischargeReport: interpret_util_1.argumentMap,
  queryDischargeBook: interpret_util_1.argumentMap,
  getOutMeasure: interpret_util_1.argumentMap,
  getPhysioReportById: interpret_util_1.argumentMap,
  getPhysioDischargeById: interpret_util_1.argumentMap,
  updatePhysioReport: interpret_util_1.argumentMap,
  updateDischargeActionStatus: interpret_util_1.argumentMap,
  getPhysioCheckInTimeList: interpret_util_1.argumentMap,
  queryPhysioReportPrint: interpret_util_1.argumentMap,
};
function IPhysioReportService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.ix.api.service.IPhysioReportService',
    version: '1.0.0',
    methods: exports.IPhysioReportServiceWrapper,
  });
}
exports.IPhysioReportService = IPhysioReportService;
//generate by interpret-cli dubbo2.js
