'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.VisitSummaryServiceWrapper = {
  adcTransactionHistoryForRelease: interpret_util_1.argumentMap,
  adcIssueLogList: interpret_util_1.argumentMap,
  addAdcIssueLog: interpret_util_1.argumentMap,
  clearIssueData: interpret_util_1.argumentMap,
  rejectIssueReason: interpret_util_1.argumentMap,
  completeChecking: interpret_util_1.argumentMap,
  scanUser: interpret_util_1.argumentMap,
  queryBillAndArea: interpret_util_1.argumentMap,
};
function VisitSummaryService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.VisitSummaryService',
    version: '1.0.0',
    methods: exports.VisitSummaryServiceWrapper,
  });
}
exports.VisitSummaryService = VisitSummaryService;
//generate by interpret-cli dubbo2.js
