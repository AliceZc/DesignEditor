'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPatientDrugAdminServiceWrapper = {
  getNumberByStatistics: interpret_util_1.argumentMap,
  queryMedicationListByCondition: interpret_util_1.argumentMap,
  getCurVisitOrderGroupNos: interpret_util_1.argumentMap,
  InsertOrUpdateRemarks: interpret_util_1.argumentMap,
};
function IPatientDrugAdminService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IPatientDrugAdminService',
    version: '1.0.0',
    methods: exports.IPatientDrugAdminServiceWrapper,
  });
}
exports.IPatientDrugAdminService = IPatientDrugAdminService;
//generate by interpret-cli dubbo2.js
