'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OrderExeRecSearchReq {
  constructor(params) {
    this.patId = params.patId;
    this.freq = params.freq;
    this.visitNos = params.visitNos;
    this.orderExeNo = params.orderExeNo;
    this.duration = params.duration;
    this.visitType = params.visitType;
    this.planTime = params.planTime;
    this.visitNo = params.visitNo;
    this.orderGroupNo = params.orderGroupNo;
    this.titleQueryType = params.titleQueryType;
    this.durationUnit = params.durationUnit;
    this.orderSubNo = params.orderSubNo;
    this.orderNo = params.orderNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.OrderExeRecSearchReq',
      $: {
        patId: js_to_java_1.default.String(this.patId),
        freq: js_to_java_1.default.String(this.freq),
        visitNos: this.visitNos
          ? js_to_java_1.default.List(
              (this.visitNos || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        orderExeNo: js_to_java_1.default.String(this.orderExeNo),
        duration: js_to_java_1.default.String(this.duration),
        visitType: js_to_java_1.default.String(this.visitType),
        planTime: js_to_java_1.default.String(this.planTime),
        visitNo: js_to_java_1.default.String(this.visitNo),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        titleQueryType: js_to_java_1.default.String(this.titleQueryType),
        durationUnit: js_to_java_1.default.String(this.durationUnit),
        orderSubNo: js_to_java_1.default.String(this.orderSubNo),
        orderNo: js_to_java_1.default.String(this.orderNo),
      },
    };
  }
}
exports.OrderExeRecSearchReq = OrderExeRecSearchReq;
//generate by interpret-cli dubbo2.js
