'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ILabBookingServiceWrapper = {
  addLabBooking: interpret_util_1.argumentMap,
  modifyLabBooking: interpret_util_1.argumentMap,
  confirmLabBooking: interpret_util_1.argumentMap,
  cancelLabBooking: interpret_util_1.argumentMap,
  queryLabBookingList: interpret_util_1.argumentMap,
  queryLabBookingByOperation: interpret_util_1.argumentMap,
  queryLastestLabBookingByOperation: interpret_util_1.argumentMap,
  acknowledgeLabBooking: interpret_util_1.argumentMap,
  queryLabBookingLogList: interpret_util_1.argumentMap,
};
function ILabBookingService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.ILabBookingService',
    version: '1.0.0',
    methods: exports.ILabBookingServiceWrapper,
  });
}
exports.ILabBookingService = ILabBookingService;
