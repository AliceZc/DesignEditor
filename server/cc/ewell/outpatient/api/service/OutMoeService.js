'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.OutMoeServiceWrapper = {
  selectPrescription: interpret_util_1.argumentMap,
  queryOupRefillPrompt: interpret_util_1.argumentMap,
  queryGroupNoDetail: interpret_util_1.argumentMap,
};
function OutMoeService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.outpatient.api.service.OutMoeService',
    version: '1.0.0',
    methods: exports.OutMoeServiceWrapper,
  });
}
exports.OutMoeService = OutMoeService;
//generate by interpret-cli dubbo2.js
