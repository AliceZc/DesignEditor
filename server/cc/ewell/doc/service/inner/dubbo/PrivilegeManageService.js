'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.PrivilegeManageServiceWrapper = {
  getAllDocClassTreeByRole: interpret_util_1.argumentMap,
  getDocClassTreeByRole: interpret_util_1.argumentMap,
  saveRolePrivilege: interpret_util_1.argumentMap,
  getDocFormatListByUser: interpret_util_1.argumentMap,
  getAllDocClassTreeByDept: interpret_util_1.argumentMap,
  saveUserPrivilege: interpret_util_1.argumentMap,
  saveUserDocPrivilege: interpret_util_1.argumentMap,
  getUserList: interpret_util_1.argumentMap,
  getDocClassTreeByDept: interpret_util_1.argumentMap,
  getAllDocFormatListByUser: interpret_util_1.argumentMap,
  saveDeptPrivilege: interpret_util_1.argumentMap,
  getGrantByRole: interpret_util_1.argumentMap,
  getRoleList: interpret_util_1.argumentMap,
  getUserDetailData: interpret_util_1.argumentMap,
  getDocPrivilegeByRole: interpret_util_1.argumentMap,
  getGrantByDept: interpret_util_1.argumentMap,
  getGrantByUserID: interpret_util_1.argumentMap,
  getUserPrivilege: interpret_util_1.argumentMap,
};
function PrivilegeManageService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.doc.service.inner.dubbo.PrivilegeManageService',
    version: 'V-0.0.1',
    methods: exports.PrivilegeManageServiceWrapper,
  });
}
exports.PrivilegeManageService = PrivilegeManageService;
//generate by interpret-cli dubbo2.js
