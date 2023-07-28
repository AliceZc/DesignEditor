'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IChiefComplaintServiceWrapper = {
  editChiefComplaintByPatId: interpret_util_1.argumentMap,
  queryChiefComplaintByPatId: interpret_util_1.argumentMap,
};
function IChiefComplaintService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IChiefComplaintService',
    version: '1.0.0',
    methods: exports.IChiefComplaintServiceWrapper,
  });
}
exports.IChiefComplaintService = IChiefComplaintService;
//generate by interpret-cli dubbo2.js
