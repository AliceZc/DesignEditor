'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.NurseSendDrugServiceWrapper = {
  queryOrders: interpret_util_1.argumentMap,
  queryOrdersByDetailNo: interpret_util_1.argumentMap,
  updateBigPackageStatus: interpret_util_1.argumentMap,
  getBigPackageHistory: interpret_util_1.argumentMap,
  getBatchHistory: interpret_util_1.argumentMap,
  bigPackageStatus: interpret_util_1.argumentMap,
};
function NurseSendDrugService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.inpatient.api.service.NurseSendDrugService',
    methods: exports.NurseSendDrugServiceWrapper,
  });
}
exports.NurseSendDrugService = NurseSendDrugService;
//generate by interpret-cli dubbo2.js
