'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOrderExeRecServiceWrapper = {
  getRepeatExeRecs: interpret_util_1.argumentMap,
  getAllOrderExeBySelect: interpret_util_1.argumentMap,
  queryPackageDosageForNuring: interpret_util_1.argumentMap,
  getRepeatExeRecsByInpNos: interpret_util_1.argumentMap,
  queryOverDueOrderExeRec: interpret_util_1.argumentMap,
  queryExeTimes: interpret_util_1.argumentMap,
  queryAllOrderExeRecByPatient: interpret_util_1.argumentMap,
  modifyOrderExeByNo: interpret_util_1.argumentMap,
  saveOrderExRecByNurse: interpret_util_1.argumentMap,
  queryOrderExeRecList: interpret_util_1.argumentMap,
  queryInpNosOverDueOrderExeRec: interpret_util_1.argumentMap,
  queryOrderExeRecByOrderNo: interpret_util_1.argumentMap,
};
function IOrderExeRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IOrderExeRecService',
    version: '1.0.0',
    methods: exports.IOrderExeRecServiceWrapper,
  });
}
exports.IOrderExeRecService = IOrderExeRecService;
//generate by interpret-cli dubbo2.js
