'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SysDictLibraryBean {
  constructor(params) {
    this.sysMenuBeans = params.sysMenuBeans;
    this.code = params.code;
    this.dictCode = params.dictCode;
    this.createTime = params.createTime;
    this.enable = params.enable;
    this.name = params.name;
    this.pageSize = params.pageSize;
    this.remark = params.remark;
    this.updateTime = params.updateTime;
    this.id = params.id;
    this.pageNum = params.pageNum;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.authority.api.dto.SysDictLibraryBean',
      $: {
        sysMenuBeans: this.sysMenuBeans
          ? js_to_java_1.default.List(
              (this.sysMenuBeans || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        code: js_to_java_1.default.String(this.code),
        dictCode: js_to_java_1.default.String(this.dictCode),
        createTime: this.createTime,
        enable: js_to_java_1.default.String(this.enable),
        name: js_to_java_1.default.String(this.name),
        pageSize: js_to_java_1.default.Integer(this.pageSize),
        remark: js_to_java_1.default.String(this.remark),
        updateTime: this.updateTime,
        id: js_to_java_1.default.Long(this.id),
        pageNum: js_to_java_1.default.Integer(this.pageNum),
      },
    };
  }
}
exports.SysDictLibraryBean = SysDictLibraryBean;
//generate by interpret-cli dubbo2.js
