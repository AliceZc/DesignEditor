'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOrderScheduleServiceWrapper = {
  getOrderScheduleDetailByDrug: interpret_util_1.argumentMap,
  getOrderScheduleDetailByPat: interpret_util_1.argumentMap,
};
function IOrderScheduleService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.inpatient.api.service.IOrderScheduleService',
    methods: exports.IOrderScheduleServiceWrapper,
  });
}
exports.IOrderScheduleService = IOrderScheduleService;
//generate by interpret-cli dubbo2.js
