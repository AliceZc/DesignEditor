'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOperationRoomSessionServiceWrapper = {
  addOrUpdateOpRoomSession: interpret_util_1.argumentMap,
  listOpRoomSession: interpret_util_1.argumentMap,
};
function IOperationRoomSessionService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.IOperationRoomSessionService',
    version: '1.0.0',
    methods: exports.IOperationRoomSessionServiceWrapper,
  });
}
exports.IOperationRoomSessionService = IOperationRoomSessionService;
//generate by interpret-cli dubbo2.js
