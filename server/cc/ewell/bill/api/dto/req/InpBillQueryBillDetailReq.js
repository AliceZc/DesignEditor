'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class InpBillQueryBillDetailReq {
  constructor(params) {
    this.itemName = params.itemName;
    this.endDate = params.endDate;
    this.inpBillNo = params.inpBillNo;
    this.patId = params.patId;
    this.inpBillDetailNo = params.inpBillDetailNo;
    this.itemClass = params.itemClass;
    this.termType = params.termType;
    this.timeType = params.timeType;
    this.openDept = params.openDept;
    this.startDate = params.startDate;
    this.visitNo = params.visitNo;
    this.visitType = params.visitType;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.bill.api.dto.req.InpBillQueryBillDetailReq',
      $: {
        itemName: js_to_java_1.default.String(this.itemName),
        endDate: js_to_java_1.default.String(this.endDate),
        inpBillNo: js_to_java_1.default.String(this.inpBillNo),
        patId: js_to_java_1.default.String(this.patId),
        inpBillDetailNo: js_to_java_1.default.String(this.inpBillDetailNo),
        itemClass: js_to_java_1.default.String(this.itemClass),
        termType: js_to_java_1.default.String(this.termType),
        timeType: js_to_java_1.default.String(this.timeType),
        openDept: js_to_java_1.default.String(this.openDept),
        startDate: js_to_java_1.default.String(this.startDate),
        visitNo: js_to_java_1.default.String(this.visitNo),
        visitType: js_to_java_1.default.String(this.visitType),
      },
    };
  }
}
exports.InpBillQueryBillDetailReq = InpBillQueryBillDetailReq;
//generate by interpret-cli dubbo2.js
