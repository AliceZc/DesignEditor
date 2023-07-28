'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SubmitBillDetailReq {
  constructor(params) {
    this.patId = params.patId;
    this.visitNo = params.visitNo;
    this.visitType = params.visitType;
    this.cumcNo = params.cumcNo;
    this.doctorId = params.doctorId;
    this.doctorName = params.doctorName;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.bill.api.dto.req.SubmitBillDetailReq',
      $: {
        patId: js_to_java_1.default.String(this.patId),
        visitNo: js_to_java_1.default.String(this.visitNo),
        visitType: js_to_java_1.default.String(this.visitType),
        cumcNo: js_to_java_1.default.String(this.cumcNo),
        doctorId: js_to_java_1.default.String(this.doctorId),
        doctorName: js_to_java_1.default.String(this.doctorName),
      },
    };
  }
}
exports.SubmitBillDetailReq = SubmitBillDetailReq;
//generate by interpret-cli dubbo2.js
