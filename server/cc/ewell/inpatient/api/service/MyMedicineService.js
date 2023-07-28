'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.MyMedicineServiceWrapper = {
  queryExecutionRes: interpret_util_1.argumentMap,
  medicationWsConsumption: interpret_util_1.argumentMap,
};
function MyMedicineService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.inpatient.api.service.MyMedicineService',
    version: '1.0.0',
    methods: exports.MyMedicineServiceWrapper,
  });
}
exports.MyMedicineService = MyMedicineService;
//generate by interpret-cli dubbo2.js
