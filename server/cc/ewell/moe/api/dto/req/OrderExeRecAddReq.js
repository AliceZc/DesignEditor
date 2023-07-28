'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OrderExeRecAddReq {
  constructor(params) {
    this.drugCode = params.drugCode;
    this.patId = params.patId;
    this.freq = params.freq;
    this.visitNos = params.visitNos;
    this.orderRean = params.orderRean;
    this.orderExeStatus = params.orderExeStatus;
    this.orderExeNo = params.orderExeNo;
    this.planDate = params.planDate;
    this.orderExeSubNo = params.orderExeSubNo;
    this.duration = params.duration;
    this.orderExeGroupNo = params.orderExeGroupNo;
    this.visitType = params.visitType;
    this.planDateList = params.planDateList;
    this.creatUserId = params.creatUserId;
    this.planTime = params.planTime;
    this.visitNo = params.visitNo;
    this.creatUser = params.creatUser;
    this.orderGroupNo = params.orderGroupNo;
    this.drugName = params.drugName;
    this.durationUnit = params.durationUnit;
    this.orderSubNo = params.orderSubNo;
    this.orderNo = params.orderNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.OrderExeRecAddReq',
      $: {
        drugCode: js_to_java_1.default.String(this.drugCode),
        patId: js_to_java_1.default.String(this.patId),
        freq: js_to_java_1.default.String(this.freq),
        visitNos: this.visitNos
          ? js_to_java_1.default.List(
              (this.visitNos || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        orderRean: js_to_java_1.default.String(this.orderRean),
        orderExeStatus: js_to_java_1.default.String(this.orderExeStatus),
        orderExeNo: js_to_java_1.default.String(this.orderExeNo),
        planDate: js_to_java_1.default.String(this.planDate),
        orderExeSubNo: js_to_java_1.default.String(this.orderExeSubNo),
        duration: js_to_java_1.default.String(this.duration),
        orderExeGroupNo: js_to_java_1.default.String(this.orderExeGroupNo),
        visitType: js_to_java_1.default.String(this.visitType),
        planDateList: this.planDateList
          ? js_to_java_1.default.List(
              (this.planDateList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        creatUserId: js_to_java_1.default.String(this.creatUserId),
        planTime: js_to_java_1.default.String(this.planTime),
        visitNo: js_to_java_1.default.String(this.visitNo),
        creatUser: js_to_java_1.default.String(this.creatUser),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        drugName: js_to_java_1.default.String(this.drugName),
        durationUnit: js_to_java_1.default.String(this.durationUnit),
        orderSubNo: js_to_java_1.default.String(this.orderSubNo),
        orderNo: js_to_java_1.default.String(this.orderNo),
      },
    };
  }
}
exports.OrderExeRecAddReq = OrderExeRecAddReq;
//generate by interpret-cli dubbo2.js
