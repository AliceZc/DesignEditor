'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OtherOrderReq {
  constructor(params) {
    this.discontinueReason = params.discontinueReason;
    this.orderNo = params.orderNo;
    this.operationFlag = params.operationFlag;
    this.patId = params.patId;
    this.freq = params.freq;
    this.orderStatus = params.orderStatus;
    this.remark = params.remark;
    this.visitType = params.visitType;
    this.doctor = params.doctor;
    this.operationNo = params.operationNo;
    this.doctorId = params.doctorId;
    this.stopTime = params.stopTime;
    this.orderCode = params.orderCode;
    this.startTime = params.startTime;
    this.endTime = params.endTime;
    this.orderDesc = params.orderDesc;
    this.visitNo = params.visitNo;
    this.freq = params.freq;
    this.operationNo = params.operationNo;
    this.operationFlag = params.operationFlag;
    this.destinationCode = params.destinationCode;
    this.destinationName = params.destinationName;
    this.orderType = params.orderType;
    this.dischargeTime = params.dischargeTime;
    this.packageCode = params.packageCode;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.OtherOrderReq',
      $: {
        discontinueReason: js_to_java_1.default.String(this.discontinueReason),
        orderNo: js_to_java_1.default.String(this.orderNo),
        operationFlag: js_to_java_1.default.String(this.operationFlag),
        patId: js_to_java_1.default.String(this.patId),
        freq: js_to_java_1.default.String(this.freq),
        orderStatus: js_to_java_1.default.String(this.orderStatus),
        remark: js_to_java_1.default.String(this.remark),
        visitType: js_to_java_1.default.String(this.visitType),
        doctor: js_to_java_1.default.String(this.doctor),
        operationNo: js_to_java_1.default.String(this.operationNo),
        doctorId: js_to_java_1.default.String(this.doctorId),
        stopTime: js_to_java_1.default.String(this.stopTime),
        orderCode: js_to_java_1.default.String(this.orderCode),
        startTime: js_to_java_1.default.String(this.startTime),
        endTime: js_to_java_1.default.String(this.endTime),
        orderDesc: js_to_java_1.default.String(this.orderDesc),
        visitNo: js_to_java_1.default.String(this.visitNo),
        destinationCode: js_to_java_1.default.String(this.destinationCode),
        destinationName: js_to_java_1.default.String(this.destinationName),
        orderType: js_to_java_1.default.String(this.orderType),
        dischargeTime: js_to_java_1.default.String(this.dischargeTime),
        packageCode: js_to_java_1.default.String(this.packageCode),
      },
    };
  }
}
exports.OtherOrderReq = OtherOrderReq;
//generate by interpret-cli dubbo2.js
