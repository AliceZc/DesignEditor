'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SysUserBean {
  constructor(params) {
    this.address = params.address;
    this.namePinyin = params.namePinyin;
    this.sex = params.sex;
    this.loginToken = params.loginToken;
    this.remark = params.remark;
    this.userName = params.userName;
    this.password = params.password;
    this.phone = params.phone;
    this.createTime = params.createTime;
    this.enable = params.enable;
    this.id = params.id;
    this.userType = params.userType;
    this.account = params.account;
    this.email = params.email;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.authority.api.dto.SysUserBean',
      $: {
        address: js_to_java_1.default.String(this.address),
        namePinyin: js_to_java_1.default.String(this.namePinyin),
        sex: js_to_java_1.default.Integer(this.sex),
        loginToken: js_to_java_1.default.String(this.loginToken),
        remark: js_to_java_1.default.String(this.remark),
        userName: js_to_java_1.default.String(this.userName),
        password: js_to_java_1.default.String(this.password),
        phone: js_to_java_1.default.String(this.phone),
        createTime: this.createTime,
        enable: js_to_java_1.default.Byte(this.enable),
        id: js_to_java_1.default.Long(this.id),
        userType: js_to_java_1.default.String(this.userType),
        account: js_to_java_1.default.String(this.account),
        email: js_to_java_1.default.String(this.email),
      },
    };
  }
}
exports.SysUserBean = SysUserBean;
//generate by interpret-cli dubbo2.js
