'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OrderPauseReq {
  constructor(params) {
    this.dosage = params.dosage;
    this.reason = params.reason;
    this.validIndicator = params.validIndicator;
    this.drugCode = params.drugCode;
    this.flag = params.flag;
    this.endDate = params.endDate;
    this.patId = params.patId;
    this.rateAmount = params.rateAmount;
    this.freq = params.freq;
    this.rateUnit = params.rateUnit;
    this.remark = params.remark;
    this.unitl = params.unitl;
    this.serialNo = params.serialNo;
    this.route = params.route;
    this.reviewDate = params.reviewDate;
    this.doctorId = params.doctorId;
    this.doctorName = params.doctorName;
    this.visitNo = params.visitNo;
    this.drugName = params.drugName;
    this.orderGroupNo = params.orderGroupNo;
    this.orderPauseNo = params.orderPauseNo;
    this.withHoldToDate = params.withHoldToDate;
    this.withHoldFromDate = params.withHoldFromDate;
    this.orderGroupNos = params.orderGroupNos;
    this.startDate = params.startDate;
    this.visitType = params.visitType;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.OrderPauseReq',
      $: {
        dosage: js_to_java_1.default.String(this.dosage),
        reason: js_to_java_1.default.String(this.reason),
        validIndicator: js_to_java_1.default.String(this.validIndicator),
        drugCode: js_to_java_1.default.String(this.drugCode),
        flag: js_to_java_1.default.String(this.flag),
        endDate: js_to_java_1.default.String(this.endDate),
        patId: js_to_java_1.default.String(this.patId),
        rateAmount: js_to_java_1.default.String(this.rateAmount),
        freq: js_to_java_1.default.String(this.freq),
        rateUnit: js_to_java_1.default.String(this.rateUnit),
        remark: js_to_java_1.default.String(this.remark),
        unitl: js_to_java_1.default.String(this.unitl),
        serialNo: js_to_java_1.default.String(this.serialNo),
        route: js_to_java_1.default.String(this.route),
        reviewDate: js_to_java_1.default.String(this.reviewDate),
        doctorId: js_to_java_1.default.String(this.doctorId),
        doctorName: js_to_java_1.default.String(this.doctorName),
        visitNo: js_to_java_1.default.String(this.visitNo),
        drugName: js_to_java_1.default.String(this.drugName),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        orderPauseNo: this.orderPauseNo
          ? js_to_java_1.default.List(
              (this.orderPauseNo || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        withHoldToDate: js_to_java_1.default.String(this.withHoldToDate),
        withHoldFromDate: js_to_java_1.default.String(this.withHoldFromDate),
        orderGroupNos: this.orderGroupNos
          ? js_to_java_1.default.List(
              (this.orderGroupNos || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        startDate: js_to_java_1.default.String(this.startDate),
        visitType: js_to_java_1.default.String(this.visitType),
      },
    };
  }
}
exports.OrderPauseReq = OrderPauseReq;
//generate by interpret-cli dubbo2.js
