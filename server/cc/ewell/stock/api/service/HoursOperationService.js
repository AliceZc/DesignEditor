'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.HoursOperationServiceWrapper = {
  queryHoursOperation: interpret_util_1.argumentMap,
  addHoursOperation: interpret_util_1.argumentMap,
  modifyHoursOperation: interpret_util_1.argumentMap,
  deleteHoursOperation: interpret_util_1.argumentMap,
  queryOpenState: interpret_util_1.argumentMap,
};
function HoursOperationService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.HoursOperationService',
    version: '1.0.0',
    methods: exports.HoursOperationServiceWrapper,
  });
}
exports.HoursOperationService = HoursOperationService;
//generate by interpret-cli dubbo2.js
