'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ShiftRequestServiceWrapper = {};
function ShiftRequestService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.schedule.api.service.ShiftRequestService',
    version: '1.0.0',
    methods: exports.ShiftRequestServiceWrapper,
  });
}
exports.ShiftRequestService = ShiftRequestService;
//generate by interpret-cli dubbo2.js
