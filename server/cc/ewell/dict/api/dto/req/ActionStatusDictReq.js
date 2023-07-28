'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class ActionStatusDictReq {
  constructor(params) {
    this.actionstatusCode = params.actionstatusCode;
    this.user = params.user;
    this.userId = params.userId;
    this.actionstatusName = params.actionstatusName;
    this.hospitalCode = params.hospitalCode;
    this.serialNo = params.serialNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.req.ActionStatusDictReq',
      $: {
        actionstatusCode: js_to_java_1.default.String(this.actionstatusCode),
        user: js_to_java_1.default.String(this.user),
        userId: js_to_java_1.default.String(this.userId),
        actionstatusName: js_to_java_1.default.String(this.actionstatusName),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        serialNo: js_to_java_1.default.String(this.serialNo),
      },
    };
  }
}
exports.ActionStatusDictReq = ActionStatusDictReq;
//generate by interpret-cli dubbo2.js
