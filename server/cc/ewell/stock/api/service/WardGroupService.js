'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.WardGroupServiceWrapper = {
  addWardGroup: interpret_util_1.argumentMap,
  queryWardGroup: interpret_util_1.argumentMap,
  deleteWardGroup: interpret_util_1.argumentMap,
  modifyWardGroup: interpret_util_1.argumentMap,
};
function WardGroupService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.WardGroupService',
    version: '1.0.0',
    methods: exports.WardGroupServiceWrapper,
  });
}
exports.WardGroupService = WardGroupService;
//generate by interpret-cli dubbo2.js
