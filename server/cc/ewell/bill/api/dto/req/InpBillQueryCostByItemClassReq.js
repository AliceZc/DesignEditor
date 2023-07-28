'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class InpBillQueryCostByItemClassReq {
  constructor(params) {
    this.patId = params.patId;
    this.openDept = params.openDept;
    this.visitNo = params.visitNo;
    this.visitType = params.visitType;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.bill.api.dto.req.InpBillQueryCostByItemClassReq',
      $: {
        patId: js_to_java_1.default.String(this.patId),
        openDept: js_to_java_1.default.String(this.openDept),
        visitNo: js_to_java_1.default.String(this.visitNo),
        visitType: js_to_java_1.default.String(this.visitType),
      },
    };
  }
}
exports.InpBillQueryCostByItemClassReq = InpBillQueryCostByItemClassReq;
//generate by interpret-cli dubbo2.js
