'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SysRoleBean {
  constructor(params) {
    this.sysMenuBeanList = params.sysMenuBeanList;
    this.seniorRole = params.seniorRole;
    this.roleId = params.roleId;
    this.pageSize = params.pageSize;
    this.remark = params.remark;
    this.updateTime = params.updateTime;
    this.roleType = params.roleType;
    this.pageNum = params.pageNum;
    this.sysExtendsRoleList = params.sysExtendsRoleList;
    this.nonPlatformUrl = params.nonPlatformUrl;
    this.createTime = params.createTime;
    this.enable = params.enable;
    this.roleName = params.roleName;
    this.rolesUserdNum = params.rolesUserdNum;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.authority.api.dto.SysRoleBean',
      $: {
        sysMenuBeanList: this.sysMenuBeanList
          ? js_to_java_1.default.List(
              (this.sysMenuBeanList || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        seniorRole: js_to_java_1.default.String(this.seniorRole),
        roleId: js_to_java_1.default.Long(this.roleId),
        pageSize: js_to_java_1.default.Integer(this.pageSize),
        remark: js_to_java_1.default.String(this.remark),
        updateTime: this.updateTime,
        roleType: js_to_java_1.default.Integer(this.roleType),
        pageNum: js_to_java_1.default.Integer(this.pageNum),
        sysExtendsRoleList: this.sysExtendsRoleList
          ? js_to_java_1.default.List(
              (this.sysExtendsRoleList || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        nonPlatformUrl: js_to_java_1.default.String(this.nonPlatformUrl),
        createTime: this.createTime,
        enable: js_to_java_1.default.String(this.enable),
        roleName: js_to_java_1.default.String(this.roleName),
        rolesUserdNum: js_to_java_1.default.Integer(this.rolesUserdNum),
      },
    };
  }
}
exports.SysRoleBean = SysRoleBean;
//generate by interpret-cli dubbo2.js
