'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class InpBillQueryBillProjectReq {
  constructor(params) {
    this.itemName = params.itemName;
    this.endDate = params.endDate;
    this.patId = params.patId;
    this.itemClass = params.itemClass;
    this.termType = params.termType;
    this.timeType = params.timeType;
    this.startDate = params.startDate;
    this.visitNo = params.visitNo;
    this.visitType = params.visitType;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.bill.api.dto.req.InpBillQueryBillProjectReq',
      $: {
        itemName: js_to_java_1.default.String(this.itemName),
        endDate: js_to_java_1.default.String(this.endDate),
        patId: js_to_java_1.default.String(this.patId),
        itemClass: js_to_java_1.default.String(this.itemClass),
        termType: js_to_java_1.default.String(this.termType),
        timeType: js_to_java_1.default.String(this.timeType),
        startDate: js_to_java_1.default.String(this.startDate),
        visitNo: js_to_java_1.default.String(this.visitNo),
        visitType: js_to_java_1.default.String(this.visitType),
      },
    };
  }
}
exports.InpBillQueryBillProjectReq = InpBillQueryBillProjectReq;
//generate by interpret-cli dubbo2.js
