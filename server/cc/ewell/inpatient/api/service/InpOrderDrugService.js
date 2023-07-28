'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.InpOrderDrugServiceWrapper = {
  matchDrug: interpret_util_1.argumentMap,
};
function InpOrderDrugService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.inpatient.api.service.InpOrderDrugService',
    methods: exports.InpOrderDrugServiceWrapper,
  });
}
exports.InpOrderDrugService = InpOrderDrugService;
//generate by interpret-cli dubbo2.js
