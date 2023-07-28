'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPrescriptionServiceWrapper = {
  commitMedicationOrderList: interpret_util_1.argumentMap,
  updateMedicationOrder: interpret_util_1.argumentMap,
  getOrderAndcountMedicationNum: interpret_util_1.argumentMap,
  addHistoryMedicationOrder: interpret_util_1.argumentMap,
  overrideOrder: interpret_util_1.argumentMap,
  doNotOverrideOrder: interpret_util_1.argumentMap,
  queryReviewOrdersByPatient: interpret_util_1.argumentMap,
  queryOrdersBySelect: interpret_util_1.argumentMap,
  queryByOrderGroupNo: interpret_util_1.argumentMap,
  queryPreparationByDrugCode: interpret_util_1.argumentMap,
  deleteOrderRecByNo: interpret_util_1.argumentMap,
  updateFreqSubNoByMedicationAddReq: interpret_util_1.argumentMap,
  queryPreparation: interpret_util_1.argumentMap,
  queryMedicationListByCondition: interpret_util_1.argumentMap,
  commitMedicationOrderlistByOrderNo: interpret_util_1.argumentMap,
  addMedicationOrder: interpret_util_1.argumentMap,
  queryPrescriptionStatus: interpret_util_1.argumentMap,
  updateOrderRecDuration: interpret_util_1.argumentMap,
  deleteOrderRec: interpret_util_1.argumentMap,
  queryOrderRecOnhand: interpret_util_1.argumentMap,
  saveVisitInfoStorage: interpret_util_1.argumentMap,
  queryVisitInfoStorage: interpret_util_1.argumentMap,
  queryOrderPrintRes: interpret_util_1.argumentMap,
  queryOperationOrder: interpret_util_1.argumentMap,
  queryOrderRecVerifyStatus: interpret_util_1.argumentMap,
  confirmOrderFlag: interpret_util_1.argumentMap,
  softDeleteOrderRecByOrderGroupNo: interpret_util_1.argumentMap,
  softDeleteOrderRecAndConfirm: interpret_util_1.argumentMap,
  addHistoryMedicationOrderForConfirm: interpret_util_1.argumentMap,
  rollBackOrderRec: interpret_util_1.argumentMap,
  updateMedicationOrderForConfirm: interpret_util_1.argumentMap,
  calculateOrderStartTime: interpret_util_1.argumentMap,
  patchCalculateOrderStartTimeAndEndTime: interpret_util_1.argumentMap,
  patchCalculateOrderStartTimeAndEndTimeNew: interpret_util_1.argumentMap,
  insertOrderVersionHistory: interpret_util_1.argumentMap,
  queryOrderVersionHistoryList: interpret_util_1.argumentMap,
  orderDSCheck: interpret_util_1.argumentMap,
  queryVerbalOrderTrackingList: interpret_util_1.argumentMap,
  excelDownload: interpret_util_1.argumentMap,
  getTaskState: interpret_util_1.argumentMap,
  queryTaskRecordList: interpret_util_1.argumentMap,
  getVerbalOrderAcknowledgeTotal: interpret_util_1.argumentMap,
};
function IPrescriptionService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IPrescriptionService',
    version: '1.0.0',
    methods: exports.IPrescriptionServiceWrapper,
  });
}
exports.IPrescriptionService = IPrescriptionService;
//generate by interpret-cli dubbo2.js
