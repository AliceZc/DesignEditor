'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class UpdateAmendReq {
  constructor(params) {
    this.doctorId = params.doctorId;
    this.doctorName = params.doctorName;
    this.inpDetailNo = params.inpDetailNo;
    this.amount = params.amount;
    this.itemPrice = params.itemPrice;
    this.amendDesc = params.amendDesc;
    this.agreeFlag = params.agreeFlag;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.bill.api.dto.req.UpdateAmendReq',
      $: {
        doctorId: js_to_java_1.default.String(this.doctorId),
        doctorName: js_to_java_1.default.String(this.doctorName),
        inpDetailNo: js_to_java_1.default.String(this.inpDetailNo),
        amount: js_to_java_1.default.String(this.amount),
        itemPrice: js_to_java_1.default.String(this.itemPrice),
        amendDesc: js_to_java_1.default.String(this.amendDesc),
        agreeFlag: js_to_java_1.default.String(this.agreeFlag),
      },
    };
  }
}
exports.UpdateAmendReq = UpdateAmendReq;
//generate by interpret-cli dubbo2.js
