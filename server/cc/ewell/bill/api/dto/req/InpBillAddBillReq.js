'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class InpBillAddBillReq {
  constructor(params) {
    this.doctorId = params.doctorId;
    this.doctorName = params.doctorName;
    this.itemGroup = params.itemGroup;
    this.amount = params.amount;
    this.itemType = params.itemType;
    this.supplementPrice = params.supplementPrice;
    this.patId = params.patId;
    this.billType = params.billType;
    this.itemCode = params.itemCode;
    this.itemClass = params.itemClass;
    this.openDept = params.openDept;
    this.visitNo = params.visitNo;
    this.visitType = params.visitType;
    this.systemId = params.systemId;
    this.nursingNote = params.nursingNote;
    this.orderNo = params.orderNo;
    this.produceTime = params.produceTime;
    this.accountId = params.accountId;
    this.ffsFlag = params.ffsFlag;
    this.itemOtherName = params.itemOtherName;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.bill.api.dto.req.InpBillAddBillReq',
      $: {
        doctorId: js_to_java_1.default.String(this.doctorId),
        doctorName: js_to_java_1.default.String(this.doctorName),
        itemGroup: js_to_java_1.default.String(this.itemGroup),
        amount: js_to_java_1.default.String(this.amount),
        itemType: js_to_java_1.default.String(this.itemType),
        supplementPrice: js_to_java_1.default.String(this.supplementPrice),
        patId: js_to_java_1.default.String(this.patId),
        billType: js_to_java_1.default.String(this.billType),
        itemCode: js_to_java_1.default.String(this.itemCode),
        itemClass: js_to_java_1.default.String(this.itemClass),
        openDept: js_to_java_1.default.String(this.openDept),
        visitNo: js_to_java_1.default.String(this.visitNo),
        visitType: js_to_java_1.default.String(this.visitType),
        systemId: js_to_java_1.default.String(this.systemId),
        nursingNote: js_to_java_1.default.String(this.nursingNote),
        orderNo: js_to_java_1.default.String(this.orderNo),
        produceTime: js_to_java_1.default.String(this.produceTime),
        accountId: js_to_java_1.default.String(this.accountId),
        ffsFlag: js_to_java_1.default.String(this.ffsFlag),
        itemOtherName: js_to_java_1.default.String(this.itemOtherName),
      },
    };
  }
}
exports.InpBillAddBillReq = InpBillAddBillReq;
//generate by interpret-cli dubbo2.js
