'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOperationRoomServiceWrapper = {
  queryAllOpRoom: interpret_util_1.argumentMap,
  addOpRoom: interpret_util_1.argumentMap,
  updateOpRoom: interpret_util_1.argumentMap,
  deleteOpRoom: interpret_util_1.argumentMap,
};
function IOperationRoomService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.IOperationRoomService',
    version: '1.0.0',
    methods: exports.IOperationRoomServiceWrapper,
  });
}
exports.IOperationRoomService = IOperationRoomService;
//generate by interpret-cli dubbo2.js
