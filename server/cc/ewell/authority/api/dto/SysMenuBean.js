'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SysMenuBean {
  constructor(params) {
    this.aliasName = params.aliasName;
    this.menuName = params.menuName;
    this.remark = params.remark;
    this.updateTime = params.updateTime;
    this.parentId = params.parentId;
    this.dictLibraryBeanList = params.dictLibraryBeanList;
    this.sortNo = params.sortNo;
    this.appTree = params.appTree;
    this.createTime = params.createTime;
    this.sceneCode = params.sceneCode;
    this.enable = params.enable;
    this.appId = params.appId;
    this.childrenTree = params.childrenTree;
    this.menuId = params.menuId;
    this.menuType = params.menuType;
    this.iconcls = params.iconcls;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.authority.api.dto.SysMenuBean',
      $: {
        aliasName: js_to_java_1.default.String(this.aliasName),
        menuName: js_to_java_1.default.String(this.menuName),
        remark: js_to_java_1.default.String(this.remark),
        updateTime: this.updateTime,
        parentId: js_to_java_1.default.Long(this.parentId),
        dictLibraryBeanList: this.dictLibraryBeanList
          ? js_to_java_1.default.List(
              (this.dictLibraryBeanList || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        sortNo: js_to_java_1.default.Integer(this.sortNo),
        appTree: this.appTree
          ? js_to_java_1.default.List(
              (this.appTree || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        createTime: this.createTime,
        sceneCode: js_to_java_1.default.String(this.sceneCode),
        enable: js_to_java_1.default.String(this.enable),
        appId: js_to_java_1.default.Long(this.appId),
        childrenTree: this.childrenTree
          ? js_to_java_1.default.List(
              (this.childrenTree || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        menuId: js_to_java_1.default.Long(this.menuId),
        menuType: js_to_java_1.default.String(this.menuType),
        iconcls: js_to_java_1.default.String(this.iconcls),
      },
    };
  }
}
exports.SysMenuBean = SysMenuBean;
//generate by interpret-cli dubbo2.js
