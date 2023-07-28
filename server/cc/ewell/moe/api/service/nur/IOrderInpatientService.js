'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOrderInpatientServiceWrapper = {
  getPdaScanOrderSchedules: interpret_util_1.argumentMap,
  getLastIvExecutedSchedules: interpret_util_1.argumentMap,
  executeOrderSchedule: interpret_util_1.argumentMap,
  executeUnsplitOrder: interpret_util_1.argumentMap,
  getPreparationMedicinePrintData: interpret_util_1.argumentMap,
  addThirdOrderSchedule: interpret_util_1.argumentMap,
  queryOrderAndOrderSchedules: interpret_util_1.argumentMap,
};
function IOrderInpatientService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.nur.IOrderInpatientService',
    version: '1.0.0',
    methods: exports.IOrderInpatientServiceWrapper,
  });
}
exports.IOrderInpatientService = IOrderInpatientService;
//generate by interpret-cli dubbo2.js
