'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SysUsageMenuDataPermissionBean {
  constructor(params) {
    this.usageMenuId = params.usageMenuId;
    this.createTime = params.createTime;
    this.enable = params.enable;
    this.dataPermissionCode = params.dataPermissionCode;
    this.updateTime = params.updateTime;
    this.id = params.id;
    this.dataPermissionValue = params.dataPermissionValue;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.authority.api.dto.SysUsageMenuDataPermissionBean',
      $: {
        usageMenuId: js_to_java_1.default.Long(this.usageMenuId),
        createTime: this.createTime,
        enable: js_to_java_1.default.String(this.enable),
        dataPermissionCode: js_to_java_1.default.String(
          this.dataPermissionCode,
        ),
        updateTime: this.updateTime,
        id: js_to_java_1.default.Long(this.id),
        dataPermissionValue: js_to_java_1.default.String(
          this.dataPermissionValue,
        ),
      },
    };
  }
}
exports.SysUsageMenuDataPermissionBean = SysUsageMenuDataPermissionBean;
//generate by interpret-cli dubbo2.js
