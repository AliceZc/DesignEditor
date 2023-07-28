'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ReportManagementServiceWrapper = {
  queryReportManagementByPage: interpret_util_1.argumentMap,
  updateReportCloseInfo: interpret_util_1.argumentMap,
};
function ReportManagementService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.ReportManagementService',
    version: '1.0.0',
    methods: exports.ReportManagementServiceWrapper,
  });
}
exports.ReportManagementService = ReportManagementService;
//generate by interpret-cli dubbo2.js
