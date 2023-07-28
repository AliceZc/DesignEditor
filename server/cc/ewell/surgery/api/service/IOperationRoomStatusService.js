'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOperationRoomStatusServiceWrapper = {
  queryOtRoomStatusList: interpret_util_1.argumentMap,
  switchOpeartionRoomStatus: interpret_util_1.argumentMap,
  queryOtRoomAssignment: interpret_util_1.argumentMap,
};
function IOperationRoomStatusService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.IOperationRoomStatusService',
    version: '1.0.0',
    methods: exports.IOperationRoomStatusServiceWrapper,
  });
}
exports.IOperationRoomStatusService = IOperationRoomStatusService;
//generate by interpret-cli dubbo2.js
