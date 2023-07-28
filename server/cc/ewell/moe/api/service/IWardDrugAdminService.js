'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IWardDrugAdminServiceWrapper = {
  getPatientsAndNumBySelect: interpret_util_1.argumentMap,
  queryMedicationListByCondition: interpret_util_1.argumentMap,
  queryAllOrderExeRecByPatient: interpret_util_1.argumentMap,
};
function IWardDrugAdminService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IWardDrugAdminService',
    version: '1.0.0',
    methods: exports.IWardDrugAdminServiceWrapper,
  });
}
exports.IWardDrugAdminService = IWardDrugAdminService;
//generate by interpret-cli dubbo2.js
