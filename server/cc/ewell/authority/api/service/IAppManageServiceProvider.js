'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IAppManageServiceProviderWrapper = {
  getAppTagList: interpret_util_1.argumentMap,
  getAppData: interpret_util_1.argumentMap,
  addAppData: interpret_util_1.argumentMap,
  addGroupPermission: interpret_util_1.argumentMap,
  addAppPermissionGroup: interpret_util_1.argumentMap,
  deleteAppData: interpret_util_1.argumentMap,
  updateGroupPermission: interpret_util_1.argumentMap,
  deleteGroupPermission: interpret_util_1.argumentMap,
  changeAppPermissionGroupStatus: interpret_util_1.argumentMap,
  addAppDataFinish: interpret_util_1.argumentMap,
  updateAppPermissionGroup: interpret_util_1.argumentMap,
  updateAppData: interpret_util_1.argumentMap,
  getGroupPermissionList: interpret_util_1.argumentMap,
  deleteAppPermissionGroup: interpret_util_1.argumentMap,
  getAppList: interpret_util_1.argumentMap,
};
function IAppManageServiceProvider(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.authority.api.service.IAppManageServiceProvider',
    version: '2.0.0',
    methods: exports.IAppManageServiceProviderWrapper,
  });
}
exports.IAppManageServiceProvider = IAppManageServiceProvider;
//generate by interpret-cli dubbo2.js
