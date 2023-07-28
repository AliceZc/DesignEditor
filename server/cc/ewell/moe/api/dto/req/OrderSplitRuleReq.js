'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OrderSplitRuleReq {
  constructor(params) {
    this.date = params.date;
    this.splitValue = params.splitValue;
    this.orderNo = params.orderNo;
    this.year = params.year;
    this.freqValue = params.freqValue;
    this.excuteTime = params.excuteTime;
    this.splitType = params.splitType;
    this.doctor = params.doctor;
    this.month = params.month;
    this.doctorId = params.doctorId;
    this.ruleNo = params.ruleNo;
    this.orderGroupNo = params.orderGroupNo;
    this.startTime = params.startTime;
    this.endTime = params.endTime;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.OrderSplitRuleReq',
      $: {
        date: js_to_java_1.default.String(this.date),
        splitValue: this.splitValue
          ? js_to_java_1.default.List(
              (this.splitValue || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        orderNo: js_to_java_1.default.String(this.orderNo),
        year: js_to_java_1.default.String(this.year),
        freqValue: js_to_java_1.default.String(this.freqValue),
        excuteTime: this.excuteTime
          ? js_to_java_1.default.List(
              (this.excuteTime || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        splitType: js_to_java_1.default.String(this.splitType),
        doctor: js_to_java_1.default.String(this.doctor),
        month: js_to_java_1.default.String(this.month),
        doctorId: js_to_java_1.default.String(this.doctorId),
        ruleNo: js_to_java_1.default.String(this.ruleNo),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        startTime: js_to_java_1.default.String(this.startTime),
        endTime: js_to_java_1.default.String(this.endTime),
      },
    };
  }
}
exports.OrderSplitRuleReq = OrderSplitRuleReq;
//generate by interpret-cli dubbo2.js
