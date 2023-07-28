'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OrderExeTimesReq {
  constructor(params) {
    this.patId = params.patId;
    this.inpNo = params.inpNo;
    this.orderGroupNo = params.orderGroupNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.OrderExeTimesReq',
      $: {
        patId: js_to_java_1.default.String(this.patId),
        inpNo: js_to_java_1.default.String(this.inpNo),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
      },
    };
  }
}
exports.OrderExeTimesReq = OrderExeTimesReq;
//generate by interpret-cli dubbo2.js
