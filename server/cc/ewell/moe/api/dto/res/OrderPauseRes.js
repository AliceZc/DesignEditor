'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OrderPauseRes {
  constructor(params) {
    this.dosage = params.dosage;
    this.reason = params.reason;
    this.drugCode = params.drugCode;
    this.endDate = params.endDate;
    this.rateAmount = params.rateAmount;
    this.freq = params.freq;
    this.remark = params.remark;
    this.routeDesc = params.routeDesc;
    this.drug = params.drug;
    this.result = params.result;
    this.rateType = params.rateType;
    this.drugFormDesc = params.drugFormDesc;
    this.tradeName = params.tradeName;
    this.reviewDate = params.reviewDate;
    this.freqDesc = params.freqDesc;
    this.orderPauseNo = params.orderPauseNo;
    this.urgent = params.urgent;
    this.withHoldToDate = params.withHoldToDate;
    this.orderSubNo = params.orderSubNo;
    this.groupFlag = params.groupFlag;
    this.specialMedication = params.specialMedication;
    this.notice = params.notice;
    this.mealTime = params.mealTime;
    this.productRoute = params.productRoute;
    this.rateTypeDesc = params.rateTypeDesc;
    this.rateUnit = params.rateUnit;
    this.updateUser = params.updateUser;
    this.drugForm = params.drugForm;
    this.prn = params.prn;
    this.mealTimeDesc = params.mealTimeDesc;
    this.unit = params.unit;
    this.route = params.route;
    this.centralLine = params.centralLine;
    this.routeParent = params.routeParent;
    this.orderGroupNo = params.orderGroupNo;
    this.productRouteDesc = params.productRouteDesc;
    this.mealTimeDetail = params.mealTimeDetail;
    this.withHoldFromDate = params.withHoldFromDate;
    this.startDate = params.startDate;
    this.timeFlag = params.timeFlag;
    this.specialMedicationDesc = params.specialMedicationDesc;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.OrderPauseRes',
      $: {
        dosage: js_to_java_1.default.String(this.dosage),
        reason: js_to_java_1.default.String(this.reason),
        drugCode: js_to_java_1.default.String(this.drugCode),
        endDate: js_to_java_1.default.String(this.endDate),
        rateAmount: js_to_java_1.default.String(this.rateAmount),
        freq: js_to_java_1.default.String(this.freq),
        remark: js_to_java_1.default.String(this.remark),
        routeDesc: js_to_java_1.default.String(this.routeDesc),
        drug: js_to_java_1.default.String(this.drug),
        result: js_to_java_1.default.String(this.result),
        rateType: js_to_java_1.default.String(this.rateType),
        drugFormDesc: js_to_java_1.default.String(this.drugFormDesc),
        tradeName: js_to_java_1.default.String(this.tradeName),
        reviewDate: js_to_java_1.default.String(this.reviewDate),
        freqDesc: js_to_java_1.default.String(this.freqDesc),
        orderPauseNo: js_to_java_1.default.String(this.orderPauseNo),
        urgent: js_to_java_1.default.String(this.urgent),
        withHoldToDate: js_to_java_1.default.String(this.withHoldToDate),
        orderSubNo: js_to_java_1.default.String(this.orderSubNo),
        groupFlag: js_to_java_1.default.String(this.groupFlag),
        specialMedication: js_to_java_1.default.String(this.specialMedication),
        notice: js_to_java_1.default.String(this.notice),
        mealTime: js_to_java_1.default.String(this.mealTime),
        productRoute: js_to_java_1.default.String(this.productRoute),
        rateTypeDesc: js_to_java_1.default.String(this.rateTypeDesc),
        rateUnit: js_to_java_1.default.String(this.rateUnit),
        updateUser: js_to_java_1.default.String(this.updateUser),
        drugForm: js_to_java_1.default.String(this.drugForm),
        prn: js_to_java_1.default.String(this.prn),
        mealTimeDesc: js_to_java_1.default.String(this.mealTimeDesc),
        unit: js_to_java_1.default.String(this.unit),
        route: js_to_java_1.default.String(this.route),
        centralLine: js_to_java_1.default.String(this.centralLine),
        routeParent: js_to_java_1.default.String(this.routeParent),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        productRouteDesc: js_to_java_1.default.String(this.productRouteDesc),
        mealTimeDetail: js_to_java_1.default.String(this.mealTimeDetail),
        withHoldFromDate: js_to_java_1.default.String(this.withHoldFromDate),
        startDate: js_to_java_1.default.String(this.startDate),
        timeFlag: js_to_java_1.default.String(this.timeFlag),
        specialMedicationDesc: js_to_java_1.default.String(
          this.specialMedicationDesc,
        ),
      },
    };
  }
}
exports.OrderPauseRes = OrderPauseRes;
//generate by interpret-cli dubbo2.js
