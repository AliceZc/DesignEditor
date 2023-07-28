'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class PMSInpBIllReq {
  constructor(params) {
    this.endDate = params.endDate;
    this.inpBillNo = params.inpBillNo;
    this.patId = params.patId;
    this.amend = params.amend;
    this.inpBillDetailNo = params.inpBillDetailNo;
    this.itemClass = params.itemClass;
    this.openDept = params.openDept;
    this.patIds = params.patIds;
    this.startDate = params.startDate;
    this.visitNo = params.visitNo;
    this.payFlag = params.payFlag;
    this.visitType = params.visitType;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.bill.api.dto.req.PMSInpBIllReq',
      $: {
        endDate: this.endDate,
        inpBillNo: js_to_java_1.default.String(this.inpBillNo),
        patId: js_to_java_1.default.String(this.patId),
        amend: js_to_java_1.default.String(this.amend),
        inpBillDetailNo: js_to_java_1.default.String(this.inpBillDetailNo),
        itemClass: js_to_java_1.default.String(this.itemClass),
        openDept: js_to_java_1.default.String(this.openDept),
        patIds: this.patIds
          ? js_to_java_1.default.List(
              (this.patIds || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        startDate: this.startDate,
        visitNo: js_to_java_1.default.String(this.visitNo),
        payFlag: js_to_java_1.default.String(this.payFlag),
        visitType: js_to_java_1.default.String(this.visitType),
      },
    };
  }
}
exports.PMSInpBIllReq = PMSInpBIllReq;
//generate by interpret-cli dubbo2.js
