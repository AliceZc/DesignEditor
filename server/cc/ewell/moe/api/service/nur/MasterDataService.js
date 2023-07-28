'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.MasterDataServiceWrapper = {
  queryEmployeeMdm: interpret_util_1.argumentMap,
};
function MasterDataService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.nur.MasterDataService',
    version: '1.0.0',
    methods: exports.MasterDataServiceWrapper,
  });
}
exports.MasterDataService = MasterDataService;
//generate by interpret-cli dubbo2.js
