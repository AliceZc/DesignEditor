'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class InpBillReq {
  constructor(params) {
    this.amount = params.amount;
    this.endDate = params.endDate;
    this.patId = params.patId;
    this.itemCode = params.itemCode;
    this.billType = params.billType;
    this.termType = params.termType;
    this.timeType = params.timeType;
    this.openDept = params.openDept;
    this.doctor = params.doctor;
    this.itemName = params.itemName;
    this.inpBillNo = params.inpBillNo;
    this.inpOuptNo = params.inpOuptNo;
    this.inpBillDetailNo = params.inpBillDetailNo;
    this.itemClass = params.itemClass;
    this.term = params.term;
    this.startDate = params.startDate;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.bill.api.dto.req.InpBillReq',
      $: {
        amount: js_to_java_1.default.String(this.amount),
        endDate: js_to_java_1.default.String(this.endDate),
        patId: js_to_java_1.default.String(this.patId),
        itemCode: js_to_java_1.default.String(this.itemCode),
        billType: js_to_java_1.default.String(this.billType),
        termType: js_to_java_1.default.String(this.termType),
        timeType: js_to_java_1.default.String(this.timeType),
        openDept: js_to_java_1.default.String(this.openDept),
        doctor: js_to_java_1.default.String(this.doctor),
        itemName: js_to_java_1.default.String(this.itemName),
        inpBillNo: js_to_java_1.default.String(this.inpBillNo),
        inpOuptNo: js_to_java_1.default.String(this.inpOuptNo),
        inpBillDetailNo: js_to_java_1.default.String(this.inpBillDetailNo),
        itemClass: js_to_java_1.default.String(this.itemClass),
        term: js_to_java_1.default.String(this.term),
        startDate: js_to_java_1.default.String(this.startDate),
      },
    };
  }
}
exports.InpBillReq = InpBillReq;
//generate by interpret-cli dubbo2.js
