'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SysAppBean {
  constructor(params) {
    this.appName = params.appName;
    this.pageSize = params.pageSize;
    this.remark = params.remark;
    this.updateTime = params.updateTime;
    this.appCode = params.appCode;
    this.pageNum = params.pageNum;
    this.tags = params.tags;
    this.sortNo = params.sortNo;
    this.mainDomainCode = params.mainDomainCode;
    this.sysAppPermissionGroupBeans = params.sysAppPermissionGroupBeans;
    this.mountNum = params.mountNum;
    this.createTime = params.createTime;
    this.webUrl = params.webUrl;
    this.enable = params.enable;
    this.appId = params.appId;
    this.seniorRightsUrl = params.seniorRightsUrl;
    this.iconcls = params.iconcls;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.authority.api.dto.SysAppBean',
      $: {
        appName: js_to_java_1.default.String(this.appName),
        pageSize: js_to_java_1.default.Integer(this.pageSize),
        remark: js_to_java_1.default.String(this.remark),
        updateTime: this.updateTime,
        appCode: js_to_java_1.default.String(this.appCode),
        pageNum: js_to_java_1.default.Integer(this.pageNum),
        tags: js_to_java_1.default.String(this.tags),
        sortNo: js_to_java_1.default.Integer(this.sortNo),
        mainDomainCode: js_to_java_1.default.String(this.mainDomainCode),
        sysAppPermissionGroupBeans: this.sysAppPermissionGroupBeans
          ? js_to_java_1.default.List(
              (this.sysAppPermissionGroupBeans || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        mountNum: js_to_java_1.default.Integer(this.mountNum),
        createTime: this.createTime,
        webUrl: js_to_java_1.default.String(this.webUrl),
        enable: js_to_java_1.default.String(this.enable),
        appId: js_to_java_1.default.Long(this.appId),
        seniorRightsUrl: js_to_java_1.default.String(this.seniorRightsUrl),
        iconcls: js_to_java_1.default.String(this.iconcls),
      },
    };
  }
}
exports.SysAppBean = SysAppBean;
//generate by interpret-cli dubbo2.js
