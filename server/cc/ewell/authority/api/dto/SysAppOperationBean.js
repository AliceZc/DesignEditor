'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SysAppOperationBean {
  constructor(params) {
    this.dataUrl = params.dataUrl;
    this.createTime = params.createTime;
    this.permissionsGroupId = params.permissionsGroupId;
    this.enable = params.enable;
    this.permissionsId = params.permissionsId;
    this.remark = params.remark;
    this.updateTime = params.updateTime;
    this.permissionsType = params.permissionsType;
    this.permissionsCode = params.permissionsCode;
    this.permissionsName = params.permissionsName;
    this.menuDataPermissionBeans = params.menuDataPermissionBeans;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.authority.api.dto.SysAppOperationBean',
      $: {
        dataUrl: js_to_java_1.default.String(this.dataUrl),
        createTime: this.createTime,
        permissionsGroupId: js_to_java_1.default.Long(this.permissionsGroupId),
        enable: js_to_java_1.default.String(this.enable),
        permissionsId: js_to_java_1.default.Long(this.permissionsId),
        remark: js_to_java_1.default.String(this.remark),
        updateTime: this.updateTime,
        permissionsType: js_to_java_1.default.String(this.permissionsType),
        permissionsCode: js_to_java_1.default.String(this.permissionsCode),
        permissionsName: js_to_java_1.default.String(this.permissionsName),
        menuDataPermissionBeans: this.menuDataPermissionBeans
          ? js_to_java_1.default.List(
              (this.menuDataPermissionBeans || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}
exports.SysAppOperationBean = SysAppOperationBean;
//generate by interpret-cli dubbo2.js
