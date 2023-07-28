'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IAdmBookingDubboServiceWrapper = {
  queryAdmRequestList: interpret_util_1.argumentMap,
  saveAmdRequestBooking: interpret_util_1.argumentMap,
  queryAdmRequestDetail: interpret_util_1.argumentMap,
  saveBedBooking: interpret_util_1.argumentMap,
  rejectAdmRequest: interpret_util_1.argumentMap,
  queryBookingHistory: interpret_util_1.argumentMap,
  deleteBooking: interpret_util_1.argumentMap,
  queryBedBookingDetail: interpret_util_1.argumentMap,
  searchAvailableBed: interpret_util_1.argumentMap,
  queryBedBoardDisplay: interpret_util_1.argumentMap,
  cancelBedBooking: interpret_util_1.argumentMap,
};
function IAdmBookingDubboService(dubbo) {
  return dubbo.proxyService({
    dubboInterface:
      'cc.ewell.pas.pat.service.dubbo.internal.IAdmBookingDubboService',
    methods: exports.IAdmBookingDubboServiceWrapper,
    version: '1.0.0',
  });
}
exports.IAdmBookingDubboService = IAdmBookingDubboService;
//generate by interpret-cli dubbo2.js
