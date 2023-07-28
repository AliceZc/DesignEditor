'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IInpBillServiceWrapper = {
  updateAmend: interpret_util_1.argumentMap,
  payResult: interpret_util_1.argumentMap,
  queryCostByItemClassList: interpret_util_1.argumentMap,
  queryDeposit: interpret_util_1.argumentMap,
  addRefund: interpret_util_1.argumentMap,
  queryBillList: interpret_util_1.argumentMap,
  queryBillByPatient: interpret_util_1.argumentMap,
  addBill: interpret_util_1.argumentMap,
  queryBillDetail: interpret_util_1.argumentMap,
  queryBillDetailList: interpret_util_1.argumentMap,
  queryCostByItemClass: interpret_util_1.argumentMap,
  updateBillDetail: interpret_util_1.argumentMap,
  submitBillDetail: interpret_util_1.argumentMap,
  queryBillProject: interpret_util_1.argumentMap,
  queryBillMergeSame: interpret_util_1.argumentMap,
  querySubmitStatus: interpret_util_1.argumentMap,
  queryPayStatus: interpret_util_1.argumentMap,
  getBillLabel: interpret_util_1.argumentMap,
  queryHighValueBill: interpret_util_1.argumentMap,
  updateBillingItemWeighting: interpret_util_1.argumentMap,
  updateGlobalDiscount: interpret_util_1.argumentMap,
  queryAmendStatus: interpret_util_1.argumentMap,
  checkWeightStatus: interpret_util_1.argumentMap,
  queryBillPayStatus: interpret_util_1.argumentMap,
  queryTierDiscountInfo: interpret_util_1.argumentMap,
  addFinalizeBillLog: interpret_util_1.argumentMap,
};
function IInpBillService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.bill.api.service.IInpBillService',
    version: '1.0.0',
    methods: exports.IInpBillServiceWrapper,
  });
}
exports.IInpBillService = IInpBillService;
//generate by interpret-cli dubbo2.js
