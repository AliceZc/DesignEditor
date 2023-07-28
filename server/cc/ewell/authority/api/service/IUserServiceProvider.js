'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IUserServiceProviderWrapper = {
  userPasswordReset: interpret_util_1.argumentMap,
  loginVerification: interpret_util_1.argumentMap,
  getWardCodeList: interpret_util_1.argumentMap,
  createUserTempPermit: interpret_util_1.argumentMap,
  addUser: interpret_util_1.argumentMap,
  getUserList: interpret_util_1.argumentMap,
  login: interpret_util_1.argumentMap,
  updateUserTempPermit: interpret_util_1.argumentMap,
  changeUserStatu: interpret_util_1.argumentMap,
  getUserDetailData: interpret_util_1.argumentMap,
  deleteUserData: interpret_util_1.argumentMap,
  getUserTempPermitList: interpret_util_1.argumentMap,
  updateUserBasicData: interpret_util_1.argumentMap,
  stopUserTempPermit: interpret_util_1.argumentMap,
  getUserInfo: interpret_util_1.argumentMap,
};
function IUserServiceProvider(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.authority.api.v3.service.IUserService',
    version: '3.0.0',
    methods: exports.IUserServiceProviderWrapper,
  });
}
exports.IUserServiceProvider = IUserServiceProvider;
//generate by interpret-cli dubbo2.js
