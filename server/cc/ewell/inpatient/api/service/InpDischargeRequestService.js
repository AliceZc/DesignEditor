'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.InpDischargeRequestServiceWrapper = {
  saveDischargeRequest: interpret_util_1.argumentMap,
};
function InpDischargeRequestService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.inpatient.api.service.InpDischargeRequestService',
    version: '1.0.0',
    methods: exports.InpDischargeRequestServiceWrapper,
  });
}
exports.InpDischargeRequestService = InpDischargeRequestService;
//generate by interpret-cli dubbo2.js
