'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPatientRoomBillServiceWrapper = {
  patientPreDischarge: interpret_util_1.argumentMap,
};
function IPatientRoomBillService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.bill.api.service.IPatientRoomBillService',
    version: '1.0.0',
    methods: exports.IPatientRoomBillServiceWrapper,
  });
}
exports.IPatientRoomBillService = IPatientRoomBillService;
//generate by interpret-cli dubbo2.js
