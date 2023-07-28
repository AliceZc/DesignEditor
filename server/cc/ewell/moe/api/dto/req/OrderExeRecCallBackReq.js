'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OrderExeRecCallBackReq {
  constructor(params) {
    this.orderExeNo = params.orderExeNo;
    this.packageNo = params.packageNo;
    this.barCode = params.barCode;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.OrderExeRecCallBackReq',
      $: {
        orderExeNo: js_to_java_1.default.String(this.orderExeNo),
        packageNo: js_to_java_1.default.String(this.packageNo),
        barCode: js_to_java_1.default.String(this.barCode),
      },
    };
  }
}
exports.OrderExeRecCallBackReq = OrderExeRecCallBackReq;
//generate by interpret-cli dubbo2.js
