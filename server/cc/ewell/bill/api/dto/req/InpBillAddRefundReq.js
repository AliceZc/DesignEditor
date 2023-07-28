'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class InpBillAddRefundReq {
  constructor(params) {
    this.doctorId = params.doctorId;
    this.doctorName = params.doctorName;
    this.amount = params.amount;
    this.itemPrice = params.itemPrice;
    this.inpBillDetailNo = params.inpBillDetailNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.bill.api.dto.req.InpBillAddRefundReq',
      $: {
        doctorId: js_to_java_1.default.String(this.doctorId),
        doctorName: js_to_java_1.default.String(this.doctorName),
        amount: js_to_java_1.default.String(this.amount),
        itemPrice: js_to_java_1.default.String(this.itemPrice),
        inpBillDetailNo: js_to_java_1.default.String(this.inpBillDetailNo),
      },
    };
  }
}
exports.InpBillAddRefundReq = InpBillAddRefundReq;
//generate by interpret-cli dubbo2.js
