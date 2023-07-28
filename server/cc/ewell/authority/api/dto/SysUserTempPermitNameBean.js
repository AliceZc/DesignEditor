'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SysUserTempPermitNameBean {
  constructor(params) {
    this.sortNo = params.sortNo;
    this.expiryHours = params.expiryHours;
    this.createTime = params.createTime;
    this.tempPermitId = params.tempPermitId;
    this.enable = params.enable;
    this.expiryTime = params.expiryTime;
    this.updateTime = params.updateTime;
    this.sysMenuBeanTempList = params.sysMenuBeanTempList;
    this.userId = params.userId;
    this.tempPermitName = params.tempPermitName;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.authority.api.dto.SysUserTempPermitNameBean',
      $: {
        sortNo: js_to_java_1.default.Integer(this.sortNo),
        expiryHours: js_to_java_1.default.Integer(this.expiryHours),
        createTime: this.createTime,
        tempPermitId: js_to_java_1.default.Long(this.tempPermitId),
        enable: js_to_java_1.default.String(this.enable),
        expiryTime: this.expiryTime,
        updateTime: this.updateTime,
        sysMenuBeanTempList: this.sysMenuBeanTempList
          ? js_to_java_1.default.List(
              (this.sysMenuBeanTempList || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        userId: js_to_java_1.default.Long(this.userId),
        tempPermitName: js_to_java_1.default.String(this.tempPermitName),
      },
    };
  }
}
exports.SysUserTempPermitNameBean = SysUserTempPermitNameBean;
//generate by interpret-cli dubbo2.js
