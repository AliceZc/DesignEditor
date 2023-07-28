'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class FormTypeDictReq {
  constructor(params) {
    this.formTypeCode = params.formTypeCode;
    this.user = params.user;
    this.userId = params.userId;
    this.hospitalCode = params.hospitalCode;
    this.serialNo = params.serialNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.req.FormTypeDictReq',
      $: {
        formTypeCode: js_to_java_1.default.String(this.formTypeCode),
        user: js_to_java_1.default.String(this.user),
        userId: js_to_java_1.default.String(this.userId),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        serialNo: js_to_java_1.default.String(this.serialNo),
      },
    };
  }
}
exports.FormTypeDictReq = FormTypeDictReq;
//generate by interpret-cli dubbo2.js
