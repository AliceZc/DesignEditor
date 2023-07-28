'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OrderExeOpeRes {
  constructor(params) {
    this.result = params.result;
    this.orderExeGroupNo = params.orderExeGroupNo;
    this.recNo = params.recNo;
    this.executePeople = params.executePeople;
    this.remark = params.remark;
    this.orderExeSubNo = params.orderExeSubNo;
    this.executeTime = params.executeTime;
    this.orderExeDealStatus = params.orderExeDealStatus;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.OrderExeOpeRes',
      $: {
        result: js_to_java_1.default.String(this.result),
        orderExeGroupNo: js_to_java_1.default.String(this.orderExeGroupNo),
        recNo: js_to_java_1.default.String(this.recNo),
        executePeople: js_to_java_1.default.String(this.executePeople),
        remark: js_to_java_1.default.String(this.remark),
        orderExeSubNo: js_to_java_1.default.String(this.orderExeSubNo),
        executeTime: js_to_java_1.default.String(this.executeTime),
        orderExeDealStatus: js_to_java_1.default.String(
          this.orderExeDealStatus,
        ),
      },
    };
  }
}
exports.OrderExeOpeRes = OrderExeOpeRes;
//generate by interpret-cli dubbo2.js
