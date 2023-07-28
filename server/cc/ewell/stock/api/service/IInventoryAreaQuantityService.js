'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IInventoryAreaQuantityServiceWrapper = {
  updateBatch: interpret_util_1.argumentMap,
  selectList: interpret_util_1.argumentMap,
  takeByLocation: interpret_util_1.argumentMap,
  insert: interpret_util_1.argumentMap,
  update: interpret_util_1.argumentMap,
  insertBatch: interpret_util_1.argumentMap,
  deleteBatch: interpret_util_1.argumentMap,
};
function IInventoryAreaQuantityService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.IInventoryAreaQuantityService',
    version: '1.0.0',
    methods: exports.IInventoryAreaQuantityServiceWrapper,
  });
}
exports.IInventoryAreaQuantityService = IInventoryAreaQuantityService;
//generate by interpret-cli dubbo2.js
