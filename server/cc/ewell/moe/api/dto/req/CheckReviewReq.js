'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class CheckReviewReq {
  constructor(params) {
    this.reviewInfo = params.reviewInfo;
    this.nextReviewDate = params.nextReviewDate;
    this.patId = params.patId;
    this.reviewEmpId = params.reviewEmpId;
    this.visitNo = params.visitNo;
    this.visitType = params.visitType;
    this.orderGroupNo = params.orderGroupNo;
    this.reviewEmpName = params.reviewEmpName;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.CheckReviewReq',
      $: {
        reviewInfo: js_to_java_1.default.String(this.reviewInfo),
        nextReviewDate: js_to_java_1.default.String(this.nextReviewDate),
        patId: js_to_java_1.default.String(this.patId),
        reviewEmpId: js_to_java_1.default.String(this.reviewEmpId),
        visitNo: js_to_java_1.default.String(this.visitNo),
        visitType: js_to_java_1.default.String(this.visitType),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        reviewEmpName: js_to_java_1.default.String(this.reviewEmpName),
      },
    };
  }
}
exports.CheckReviewReq = CheckReviewReq;
//generate by interpret-cli dubbo2.js
