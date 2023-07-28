'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.WholeShiftServiceWrapper = {
  getShiftTypes: interpret_util_1.argumentMap,
  getShiftList: interpret_util_1.argumentMap,
  addShift: interpret_util_1.argumentMap,
  delShift: interpret_util_1.argumentMap,
};
function WholeShiftService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.schedule.api.service.WholeShiftService',
    version: '1.0.0',
    methods: exports.WholeShiftServiceWrapper,
  });
}
exports.WholeShiftService = WholeShiftService;
//generate by interpret-cli dubbo2.js
