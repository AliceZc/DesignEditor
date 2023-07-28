'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.HisOmnicellServiceWrapper = {
  patientDataUpdate: interpret_util_1.argumentMap,
  drugMasterUpdate: interpret_util_1.argumentMap,
  receivingList: interpret_util_1.argumentMap,
  patientPrescriptionUpdate: interpret_util_1.argumentMap,
  transactionHistory: interpret_util_1.argumentMap,
  adcPrint: interpret_util_1.argumentMap,
};
function HisOmnicellService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.HisOmnicellService',
    version: '1.0.0',
    methods: exports.HisOmnicellServiceWrapper,
  });
}
exports.HisOmnicellService = HisOmnicellService;
//generate by interpret-cli dubbo2.js
