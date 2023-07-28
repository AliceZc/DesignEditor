'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.WardShiftServiceWrapper = {
  getWardShiftList: interpret_util_1.argumentMap,
  setWardShift: interpret_util_1.argumentMap,
  getEffectWardShiftList: interpret_util_1.argumentMap,
};
function WardShiftService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.schedule.api.service.WardShiftService',
    version: '1.0.0',
    methods: exports.WardShiftServiceWrapper,
  });
}
exports.WardShiftService = WardShiftService;
//generate by interpret-cli dubbo2.js
