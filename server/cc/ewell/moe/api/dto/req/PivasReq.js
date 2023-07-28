'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class PivasReq {
  constructor(params) {
    this.orderGroupNoList = params.orderGroupNoList;
    this.orderNo = params.orderNo;
    this.planTimeEnd = params.planTimeEnd;
    this.patId = params.patId;
    this.visitNoList = params.visitNoList;
    this.planTimeBegin = params.planTimeBegin;
    this.packageNo = params.packageNo;
    this.barCode = params.barCode;
    this.patIdList = params.patIdList;
    this.planTime = params.planTime;
    this.visitNo = params.visitNo;
    this.orderGroupNo = params.orderGroupNo;
    this.wardCode = params.wardCode;
    this.orderNoList = params.orderNoList;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.PivasReq',
      $: {
        orderGroupNoList: this.orderGroupNoList
          ? js_to_java_1.default.List(
              (this.orderGroupNoList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        orderNo: js_to_java_1.default.String(this.orderNo),
        planTimeEnd: this.planTimeEnd,
        patId: js_to_java_1.default.String(this.patId),
        visitNoList: this.visitNoList
          ? js_to_java_1.default.List(
              (this.visitNoList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        planTimeBegin: this.planTimeBegin,
        packageNo: js_to_java_1.default.String(this.packageNo),
        barCode: js_to_java_1.default.String(this.barCode),
        patIdList: this.patIdList
          ? js_to_java_1.default.List(
              (this.patIdList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        planTime: this.planTime,
        visitNo: js_to_java_1.default.String(this.visitNo),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        wardCode: js_to_java_1.default.String(this.wardCode),
        orderNoList: this.orderNoList
          ? js_to_java_1.default.List(
              (this.orderNoList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
      },
    };
  }
}
exports.PivasReq = PivasReq;
//generate by interpret-cli dubbo2.js
