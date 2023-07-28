'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class AlertRes {
  constructor(params) {
    this.alertDesc = params.alertDesc;
    this.alertType = params.alertType;
    this.allertNo = params.allertNo;
    this.alertCode = params.alertCode;
    this.updateUser = params.updateUser;
    this.updateTime = params.updateTime;
    this.result = params.result;
    this.doctor = params.doctor;
    this.opertion = params.opertion;
    this.alterLogNo = params.alterLogNo;
    this.createTime = params.createTime;
    this.validFromDate = params.validFromDate;
    this.createUser = params.createUser;
    this.validToDate = params.validToDate;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.AlertRes',
      $: {
        alertDesc: js_to_java_1.default.String(this.alertDesc),
        alertType: js_to_java_1.default.String(this.alertType),
        allertNo: js_to_java_1.default.String(this.allertNo),
        alertCode: js_to_java_1.default.String(this.alertCode),
        updateUser: js_to_java_1.default.String(this.updateUser),
        updateTime: js_to_java_1.default.String(this.updateTime),
        result: js_to_java_1.default.String(this.result),
        doctor: js_to_java_1.default.String(this.doctor),
        opertion: js_to_java_1.default.String(this.opertion),
        alterLogNo: js_to_java_1.default.String(this.alterLogNo),
        createTime: js_to_java_1.default.String(this.createTime),
        validFromDate: js_to_java_1.default.String(this.validFromDate),
        createUser: js_to_java_1.default.String(this.createUser),
        validToDate: js_to_java_1.default.String(this.validToDate),
      },
    };
  }
}
exports.AlertRes = AlertRes;
//generate by interpret-cli dubbo2.js
