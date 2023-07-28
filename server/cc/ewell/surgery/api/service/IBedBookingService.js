'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IBedBookingServiceWrapper = {
  saveRoomType: interpret_util_1.argumentMap,
  queryRoomType: interpret_util_1.argumentMap,
};
function IBedBookingService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.IBedBookingService',
    version: '1.0.0',
    methods: exports.IBedBookingServiceWrapper,
  });
}
exports.IBedBookingService = IBedBookingService;
//generate by interpret-cli dubbo2.js
