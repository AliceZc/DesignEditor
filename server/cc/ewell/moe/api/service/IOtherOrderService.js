'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOtherOrderServiceWrapper = {
  deleteOtherOrder: interpret_util_1.argumentMap,
  queryOtherOrderList: interpret_util_1.argumentMap,
  stopOtherOrder: interpret_util_1.argumentMap,
  modifyOtherOrder: interpret_util_1.argumentMap,
  commitOrder: interpret_util_1.argumentMap,
  addOtherOrder: interpret_util_1.argumentMap,
  relationOperation: interpret_util_1.argumentMap,
  deleteRelation: interpret_util_1.argumentMap,
  queryOtherOrder: interpret_util_1.argumentMap,
  updateAcknowledgeStatusByOrderNo: interpret_util_1.argumentMap,
  queryIpOrderList: interpret_util_1.argumentMap,
};
function IOtherOrderService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IOtherOrderService',
    version: '1.0.0',
    methods: exports.IOtherOrderServiceWrapper,
  });
}
exports.IOtherOrderService = IOtherOrderService;
//generate by interpret-cli dubbo2.js
