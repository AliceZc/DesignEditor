'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OrderTemplateDetailRes {
  constructor(params) {
    this.mixType = params.mixType;
    this.dosage = params.dosage;
    this.moUnit = params.moUnit;
    this.drugCode = params.drugCode;
    this.advanced = params.advanced;
    this.rateAmount = params.rateAmount;
    this.freq = params.freq;
    this.supplFreqNo = params.supplFreqNo;
    this.moAmount = params.moAmount;
    this.mome = params.mome;
    this.templateGroupNo = params.templateGroupNo;
    this.routeDesc = params.routeDesc;
    this.duration = params.duration;
    this.drugFormDesc = params.drugFormDesc;
    this.rateType = params.rateType;
    this.selfIndicator = params.selfIndicator;
    this.tradeName = params.tradeName;
    this.actionStatus = params.actionStatus;
    this.freqDesc = params.freqDesc;
    this.templateSubNo = params.templateSubNo;
    this.supplFreqDetail = params.supplFreqDetail;
    this.durationUnit = params.durationUnit;
    this.routeType = params.routeType;
    this.specialMedication = params.specialMedication;
    this.notice = params.notice;
    this.templateNo = params.templateNo;
    this.dangerDrug = params.dangerDrug;
    this.mealTime = params.mealTime;
    this.productRoute = params.productRoute;
    this.rateTypeDesc = params.rateTypeDesc;
    this.templateDetailNo = params.templateDetailNo;
    this.solutionIndicator = params.solutionIndicator;
    this.rateUnit = params.rateUnit;
    this.drugForm = params.drugForm;
    this.prn = params.prn;
    this.mealTimeDesc = params.mealTimeDesc;
    this.advanceOtherCode = params.advanceOtherCode;
    this.route = params.route;
    this.centralLine = params.centralLine;
    this.templateName = params.templateName;
    this.routeParent = params.routeParent;
    this.drugName = params.drugName;
    this.productRouteDesc = params.productRouteDesc;
    this.mealTimeDetail = params.mealTimeDetail;
    this.specialMedicationDesc = params.specialMedicationDesc;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.OrderTemplateDetailRes',
      $: {
        mixType: js_to_java_1.default.String(this.mixType),
        dosage: js_to_java_1.default.String(this.dosage),
        moUnit: js_to_java_1.default.String(this.moUnit),
        drugCode: js_to_java_1.default.String(this.drugCode),
        advanced: js_to_java_1.default.String(this.advanced),
        rateAmount: js_to_java_1.default.String(this.rateAmount),
        freq: js_to_java_1.default.String(this.freq),
        supplFreqNo: js_to_java_1.default.String(this.supplFreqNo),
        moAmount: js_to_java_1.default.Double(this.moAmount),
        mome: js_to_java_1.default.String(this.mome),
        templateGroupNo: js_to_java_1.default.String(this.templateGroupNo),
        routeDesc: js_to_java_1.default.String(this.routeDesc),
        duration: js_to_java_1.default.String(this.duration),
        drugFormDesc: js_to_java_1.default.String(this.drugFormDesc),
        rateType: js_to_java_1.default.String(this.rateType),
        selfIndicator: js_to_java_1.default.String(this.selfIndicator),
        tradeName: js_to_java_1.default.String(this.tradeName),
        actionStatus: js_to_java_1.default.String(this.actionStatus),
        freqDesc: js_to_java_1.default.String(this.freqDesc),
        templateSubNo: js_to_java_1.default.String(this.templateSubNo),
        supplFreqDetail: js_to_java_1.default.String(this.supplFreqDetail),
        durationUnit: js_to_java_1.default.String(this.durationUnit),
        routeType: js_to_java_1.default.String(this.routeType),
        specialMedication: js_to_java_1.default.String(this.specialMedication),
        notice: js_to_java_1.default.String(this.notice),
        templateNo: js_to_java_1.default.String(this.templateNo),
        dangerDrug: js_to_java_1.default.String(this.dangerDrug),
        mealTime: js_to_java_1.default.String(this.mealTime),
        productRoute: js_to_java_1.default.String(this.productRoute),
        rateTypeDesc: js_to_java_1.default.String(this.rateTypeDesc),
        templateDetailNo: js_to_java_1.default.String(this.templateDetailNo),
        solutionIndicator: js_to_java_1.default.String(this.solutionIndicator),
        rateUnit: js_to_java_1.default.String(this.rateUnit),
        drugForm: js_to_java_1.default.String(this.drugForm),
        prn: js_to_java_1.default.String(this.prn),
        mealTimeDesc: js_to_java_1.default.String(this.mealTimeDesc),
        advanceOtherCode: js_to_java_1.default.String(this.advanceOtherCode),
        route: js_to_java_1.default.String(this.route),
        centralLine: js_to_java_1.default.String(this.centralLine),
        templateName: js_to_java_1.default.String(this.templateName),
        routeParent: js_to_java_1.default.String(this.routeParent),
        drugName: js_to_java_1.default.String(this.drugName),
        productRouteDesc: js_to_java_1.default.String(this.productRouteDesc),
        mealTimeDetail: js_to_java_1.default.String(this.mealTimeDetail),
        specialMedicationDesc: js_to_java_1.default.String(
          this.specialMedicationDesc,
        ),
      },
    };
  }
}
exports.OrderTemplateDetailRes = OrderTemplateDetailRes;
//generate by interpret-cli dubbo2.js
