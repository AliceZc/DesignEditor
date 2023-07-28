'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SysUserMenuRequestBean {
  constructor(params) {
    this.sceneCode = params.sceneCode;
    this.menuId = params.menuId;
    this.account = params.account;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.authority.api.dto.SysUserMenuRequestBean',
      $: {
        sceneCode: js_to_java_1.default.String(this.sceneCode),
        menuId: js_to_java_1.default.String(this.menuId),
        account: js_to_java_1.default.String(this.account),
      },
    };
  }
}
exports.SysUserMenuRequestBean = SysUserMenuRequestBean;
//generate by interpret-cli dubbo2.js
