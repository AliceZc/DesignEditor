'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IAuthorityServiceProviderWrapper = {
  getPageList: interpret_util_1.argumentMap,
  getTreeList: interpret_util_1.argumentMap,
  getModuleList: interpret_util_1.argumentMap,
};
function IAuthorityServiceProvider(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.authority.api.service.IAuthorityServiceProvider',
    version: '3.0.0',
    methods: exports.IAuthorityServiceProviderWrapper,
  });
}
exports.IAuthorityServiceProvider = IAuthorityServiceProvider;
//generate by interpret-cli dubbo2.js
