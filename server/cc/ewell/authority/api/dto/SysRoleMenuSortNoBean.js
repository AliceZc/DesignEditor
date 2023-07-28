'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SysRoleMenuSortNoBean {
  constructor(params) {
    this.sysMenuBeans = params.sysMenuBeans;
    this.roleId = params.roleId;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.authority.api.dto.SysRoleMenuSortNoBean',
      $: {
        sysMenuBeans: this.sysMenuBeans
          ? js_to_java_1.default.List(
              (this.sysMenuBeans || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        roleId: js_to_java_1.default.Long(this.roleId),
      },
    };
  }
}
exports.SysRoleMenuSortNoBean = SysRoleMenuSortNoBean;
//generate by interpret-cli dubbo2.js
