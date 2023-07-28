'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IFluidMasterServiceWrapper = {
  selectOne: interpret_util_1.argumentMap,
  selectList: interpret_util_1.argumentMap,
  insert: interpret_util_1.argumentMap,
  update: interpret_util_1.argumentMap,
  deleteBatch: interpret_util_1.argumentMap,
};
function IFluidMasterService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.drugKnowledge.api.service.IFluidMasterService',
    version: '1.0.0',
    methods: exports.IFluidMasterServiceWrapper,
  });
}
exports.IFluidMasterService = IFluidMasterService;
//generate by interpret-cli dubbo2.js
