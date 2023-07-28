'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IRoleManageServiceProviderWrapper = {
  addRoleData: interpret_util_1.argumentMap,
  updateRolePermiseData: interpret_util_1.argumentMap,
  changeRoleStatu: interpret_util_1.argumentMap,
  getRoleList: interpret_util_1.argumentMap,
  getRoleData: interpret_util_1.argumentMap,
  changeRoleMenuSortNo: interpret_util_1.argumentMap,
  updateRoleBasicData: interpret_util_1.argumentMap,
};
function IRoleManageServiceProvider(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.authority.api.service.IRoleManageServiceProvider',
    version: '2.0.0',
    methods: exports.IRoleManageServiceProviderWrapper,
  });
}
exports.IRoleManageServiceProvider = IRoleManageServiceProvider;
//generate by interpret-cli dubbo2.js
