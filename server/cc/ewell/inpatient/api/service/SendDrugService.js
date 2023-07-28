'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.SendDrugServiceWrapper = {
  operationHistoryRecord: interpret_util_1.argumentMap,
  saveBigPackage: interpret_util_1.argumentMap,
  querySendDetail: interpret_util_1.argumentMap,
  sendDrug: interpret_util_1.argumentMap,
  queryDrugMessage: interpret_util_1.argumentMap,
  historyRecord: interpret_util_1.argumentMap,
};
function SendDrugService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.inpatient.api.service.SendDrugService',
    methods: exports.SendDrugServiceWrapper,
  });
}
exports.SendDrugService = SendDrugService;
//generate by interpret-cli dubbo2.js
