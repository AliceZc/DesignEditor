'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.VettingServiceWrapper = {
  getNewCount: interpret_util_1.argumentMap,
  listWarning: interpret_util_1.argumentMap,
  searchSupplFreq: interpret_util_1.argumentMap,
  verifyEdSave: interpret_util_1.argumentMap,
  listHistoryOrder: interpret_util_1.argumentMap,
  listVetOrderDrug: interpret_util_1.argumentMap,
  vetPrintLabel: interpret_util_1.argumentMap,
  listMeal: interpret_util_1.argumentMap,
  inpVecRecStatus: interpret_util_1.argumentMap,
  searchDailyFreq: interpret_util_1.argumentMap,
  searchDrug: interpret_util_1.argumentMap,
  listHistoryDrug: interpret_util_1.argumentMap,
  verify: interpret_util_1.argumentMap,
  saveVetOrderDrug: interpret_util_1.argumentMap,
  listCondition: interpret_util_1.argumentMap,
  getOrderRequest: interpret_util_1.argumentMap,
};
function VettingService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.inpatient.api.service.VettingService',
    version: '1.0.0',
    methods: exports.VettingServiceWrapper,
  });
}
exports.VettingService = VettingService;
//generate by interpret-cli dubbo2.js
