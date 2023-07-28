'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OrderExeTimesRes {
  constructor(params) {
    this.patId = params.patId;
    this.inpNo = params.inpNo;
    this.orderGroupNo = params.orderGroupNo;
    this.exeTimes = params.exeTimes;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.OrderExeTimesRes',
      $: {
        patId: js_to_java_1.default.String(this.patId),
        inpNo: js_to_java_1.default.String(this.inpNo),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        exeTimes: js_to_java_1.default.String(this.exeTimes),
      },
    };
  }
}
exports.OrderExeTimesRes = OrderExeTimesRes;
//generate by interpret-cli dubbo2.js
