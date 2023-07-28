'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SysAppPermissionGroupBean {
  constructor(params) {
    this.permissionGroupId = params.permissionGroupId;
    this.sortNo = params.sortNo;
    this.sysAppOperationBeans = params.sysAppOperationBeans;
    this.createTime = params.createTime;
    this.enable = params.enable;
    this.appId = params.appId;
    this.updateTime = params.updateTime;
    this.permissionGroupName = params.permissionGroupName;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.authority.api.dto.SysAppPermissionGroupBean',
      $: {
        permissionGroupId: js_to_java_1.default.Long(this.permissionGroupId),
        sortNo: js_to_java_1.default.Integer(this.sortNo),
        sysAppOperationBeans: this.sysAppOperationBeans
          ? js_to_java_1.default.List(
              (this.sysAppOperationBeans || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        createTime: this.createTime,
        enable: js_to_java_1.default.String(this.enable),
        appId: js_to_java_1.default.Long(this.appId),
        updateTime: this.updateTime,
        permissionGroupName: js_to_java_1.default.String(
          this.permissionGroupName,
        ),
      },
    };
  }
}
exports.SysAppPermissionGroupBean = SysAppPermissionGroupBean;
//generate by interpret-cli dubbo2.js
