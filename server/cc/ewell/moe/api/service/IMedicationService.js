'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IMedicationServiceWrapper = {
  queryOrders: interpret_util_1.argumentMap,
  queryOrdersByTerm: interpret_util_1.argumentMap,
  batchModifyOrders: interpret_util_1.argumentMap,
  listMedication: interpret_util_1.argumentMap,
  endMedication: interpret_util_1.argumentMap,
  doCheckReview: interpret_util_1.argumentMap,
  discontinueMedication: interpret_util_1.argumentMap,
  computeRemainderDoseForUnscheduleOrder: interpret_util_1.argumentMap,
  updateUrgentDispensingStatus: interpret_util_1.argumentMap,
  addReplenishment: interpret_util_1.argumentMap,
  isPrescribeMedication: interpret_util_1.argumentMap,
  updateSelfAdminFlag: interpret_util_1.argumentMap,
  dealVaccineOrder: interpret_util_1.argumentMap,
  updateVaccineOrder: interpret_util_1.argumentMap,
  dealNotCurDayAdminOrder: interpret_util_1.argumentMap,
  getVaccineAllowanceVariation: interpret_util_1.argumentMap,
};
function IMedicationService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IMedicationService',
    version: '1.0.0',
    methods: exports.IMedicationServiceWrapper,
  });
}
exports.IMedicationService = IMedicationService;
//generate by interpret-cli dubbo2.js
