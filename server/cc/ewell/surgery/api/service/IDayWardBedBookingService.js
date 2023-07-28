'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDayWardBedBookingServiceWrapper = {
  saveDayWardBed: interpret_util_1.argumentMap,
  queryDayWardBedList: interpret_util_1.argumentMap,
};
function IDayWardBedBookingService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.IDayWardBedBookingService',
    version: '1.0.0',
    methods: exports.IDayWardBedBookingServiceWrapper,
  });
}
exports.IDayWardBedBookingService = IDayWardBedBookingService;
//generate by interpret-cli dubbo2.js
