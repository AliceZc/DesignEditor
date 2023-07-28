'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDischargeServiceWrapper = {
  getDischargeInformation: interpret_util_1.argumentMap,
  saveDischarge: interpret_util_1.argumentMap,
};
function IDischargeService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IDischargeService',
    version: '1.0.0',
    methods: exports.IDischargeServiceWrapper,
  });
}
exports.IDischargeService = IDischargeService;
//generate by interpret-cli dubbo2.js
