'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IMenuManageServiceProviderWrapper = {
  addMenuData: interpret_util_1.argumentMap,
  getMenuList: interpret_util_1.argumentMap,
  updateMenuData: interpret_util_1.argumentMap,
  appMountMenu: interpret_util_1.argumentMap,
  unMountMenu: interpret_util_1.argumentMap,
};
function IMenuManageServiceProvider(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.authority.api.service.IMenuManageServiceProvider',
    version: '2.0.0',
    methods: exports.IMenuManageServiceProviderWrapper,
  });
}
exports.IMenuManageServiceProvider = IMenuManageServiceProvider;
//generate by interpret-cli dubbo2.js
