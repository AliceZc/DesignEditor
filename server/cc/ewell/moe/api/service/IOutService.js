'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOutServiceWrapper = {
  queryPatientOrder: interpret_util_1.argumentMap,
  queryOrderIcon: interpret_util_1.argumentMap,
  queryCdssCheckInfo: interpret_util_1.argumentMap,
  confirmCdssCheckInfo: interpret_util_1.argumentMap,
  generatePrescriptionNo: interpret_util_1.argumentMap,
  queryMedicationListHistoryByCondition: interpret_util_1.argumentMap,
  checkBeforeSubmitBill: interpret_util_1.argumentMap,
};
function IOutService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IOutService',
    version: '1.0.0',
    methods: exports.IOutServiceWrapper,
  });
}
exports.IOutService = IOutService;
//generate by interpret-cli dubbo2.js
