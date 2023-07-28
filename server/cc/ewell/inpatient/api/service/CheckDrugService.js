'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.CheckDrugServiceWrapper = {
  inpDrugSendList: interpret_util_1.argumentMap,
  checkDelete: interpret_util_1.argumentMap,
  checkDelink: interpret_util_1.argumentMap,
  CheckList: interpret_util_1.argumentMap,
  check: interpret_util_1.argumentMap,
};
function CheckDrugService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.inpatient.api.service.CheckDrugService',
    methods: exports.CheckDrugServiceWrapper,
  });
}
exports.CheckDrugService = CheckDrugService;
//generate by interpret-cli dubbo2.js
