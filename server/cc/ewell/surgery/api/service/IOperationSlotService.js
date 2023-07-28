'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOperationSlotServiceWrapper = {
  queryOtSlotList: interpret_util_1.argumentMap,
  removeOtSlot: interpret_util_1.argumentMap,
  queryEmergencyOtSlot: interpret_util_1.argumentMap,
  addOrUpdateOtSlot: interpret_util_1.argumentMap,
  queryOtSlotByOperationNo: interpret_util_1.argumentMap,
  verifyOtBooking: interpret_util_1.argumentMap,
};
function IOperationSlotService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.IOperationSlotService',
    version: '1.0.0',
    methods: exports.IOperationSlotServiceWrapper,
  });
}
exports.IOperationSlotService = IOperationSlotService;
//generate by interpret-cli dubbo2.js
