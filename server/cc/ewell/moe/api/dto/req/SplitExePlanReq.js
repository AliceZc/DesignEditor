'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SplitExePlanReq {
  constructor(params) {
    this.dosage = params.dosage;
    this.createUserId = params.createUserId;
    this.moUnit = params.moUnit;
    this.drugCode = params.drugCode;
    this.patId = params.patId;
    this.freq = params.freq;
    this.moAmount = params.moAmount;
    this.duration = params.duration;
    this.outpNo = params.outpNo;
    this.ordDate = params.ordDate;
    this.patSource = params.patSource;
    this.durationUnit = params.durationUnit;
    this.orderSubNo = params.orderSubNo;
    this.orderNo = params.orderNo;
    this.orderExeStatus = params.orderExeStatus;
    this.prn = params.prn;
    this.planDate = params.planDate;
    this.route = params.route;
    this.planTime = params.planTime;
    this.inpNo = params.inpNo;
    this.orderSubType = params.orderSubType;
    this.orderGroupNo = params.orderGroupNo;
    this.drugName = params.drugName;
    this.createUser = params.createUser;
    this.ordType = params.ordType;
    this.startDate = params.startDate;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.SplitExePlanReq',
      $: {
        dosage: js_to_java_1.default.String(this.dosage),
        createUserId: js_to_java_1.default.String(this.createUserId),
        moUnit: js_to_java_1.default.String(this.moUnit),
        drugCode: js_to_java_1.default.String(this.drugCode),
        patId: js_to_java_1.default.String(this.patId),
        freq: js_to_java_1.default.String(this.freq),
        moAmount: js_to_java_1.default.String(this.moAmount),
        duration: js_to_java_1.default.String(this.duration),
        outpNo: js_to_java_1.default.String(this.outpNo),
        ordDate: js_to_java_1.default.String(this.ordDate),
        patSource: js_to_java_1.default.String(this.patSource),
        durationUnit: js_to_java_1.default.String(this.durationUnit),
        orderSubNo: js_to_java_1.default.String(this.orderSubNo),
        orderNo: js_to_java_1.default.String(this.orderNo),
        orderExeStatus: js_to_java_1.default.String(this.orderExeStatus),
        prn: js_to_java_1.default.String(this.prn),
        planDate: js_to_java_1.default.String(this.planDate),
        route: js_to_java_1.default.String(this.route),
        planTime: js_to_java_1.default.String(this.planTime),
        inpNo: js_to_java_1.default.String(this.inpNo),
        orderSubType: js_to_java_1.default.String(this.orderSubType),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        drugName: js_to_java_1.default.String(this.drugName),
        createUser: js_to_java_1.default.String(this.createUser),
        ordType: js_to_java_1.default.String(this.ordType),
        startDate: js_to_java_1.default.String(this.startDate),
      },
    };
  }
}
exports.SplitExePlanReq = SplitExePlanReq;
//generate by interpret-cli dubbo2.js
