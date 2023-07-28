'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class PatAdviceExtReq {
  constructor(params) {
    this.validIndicator = params.validIndicator;
    this.visitType = params.visitType;
    this.patId = params.patId;
    this.visitNo = params.visitNo;
    this.orderGroupNo = params.orderGroupNo;
    this.orderExeStatus = params.orderExeStatus;
    this.type = params.type;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.PatAdviceExtReq',
      $: {
        validIndicator: js_to_java_1.default.String(this.validIndicator),
        visitType: js_to_java_1.default.String(this.visitType),
        patId: js_to_java_1.default.String(this.patId),
        visitNo: js_to_java_1.default.String(this.visitNo),
        orderGroupNo: this.orderGroupNo
          ? js_to_java_1.default.BigDecimal(this.orderGroupNo.value)
          : null,
        orderExeStatus: js_to_java_1.default.String(this.orderExeStatus),
        type: js_to_java_1.default.String(this.type),
      },
    };
  }
}
exports.PatAdviceExtReq = PatAdviceExtReq;
//generate by interpret-cli dubbo2.js
