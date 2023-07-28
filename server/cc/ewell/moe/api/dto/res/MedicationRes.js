'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class MedicationRes {
  constructor(params) {
    this.orderType = params.orderType;
    this.orderDischargeStatus = params.orderDischargeStatus;
    this.moUnit = params.moUnit;
    this.endDate = params.endDate;
    this.advanced = params.advanced;
    this.supplFreqNo = params.supplFreqNo;
    this.mome = params.mome;
    this.routeDesc = params.routeDesc;
    this.drug = params.drug;
    this.preparationNo = params.preparationNo;
    this.rateType = params.rateType;
    this.selfIndicator = params.selfIndicator;
    this.discontinueType = params.discontinueType;
    this.ordFlag = params.ordFlag;
    this.isHistoryRec = params.isHistoryRec;
    this.actionStatus = params.actionStatus;
    this.solution = params.solution;
    this.reviewEmpId = params.reviewEmpId;
    this.reqDoctor = params.reqDoctor;
    this.durationUnit = params.durationUnit;
    this.supplFreqDetail = params.supplFreqDetail;
    this.orderSubNo = params.orderSubNo;
    this.specialMedication = params.specialMedication;
    this.patSouce = params.patSouce;
    this.ordStatus = params.ordStatus;
    this.verifyDate = params.verifyDate;
    this.orderNo = params.orderNo;
    this.supplFreqNoDesc = params.supplFreqNoDesc;
    this.updateUserId = params.updateUserId;
    this.productRoute = params.productRoute;
    this.rateUnit = params.rateUnit;
    this.primeOrderGroupNo = params.primeOrderGroupNo;
    this.reviewTimeOutFlagDesc = params.reviewTimeOutFlagDesc;
    this.prn = params.prn;
    this.verifyInfo = params.verifyInfo;
    this.ordStatusDesc = params.ordStatusDesc;
    this.advanceOtherCode = params.advanceOtherCode;
    this.route = params.route;
    this.routeParent = params.routeParent;
    this.verifyEmpName = params.verifyEmpName;
    this.reviewTimeOutFlag = params.reviewTimeOutFlag;
    this.reviewStatus = params.reviewStatus;
    this.mealTimeDetail = params.mealTimeDetail;
    this.startDate = params.startDate;
    this.specialMedicationDesc = params.specialMedicationDesc;
    this.dosage = params.dosage;
    this.mixType = params.mixType;
    this.drugCode = params.drugCode;
    this.ouptNo = params.ouptNo;
    this.historyOrderGroupNoList = params.historyOrderGroupNoList;
    this.patId = params.patId;
    this.rateAmount = params.rateAmount;
    this.freq = params.freq;
    this.moAmount = params.moAmount;
    this.duration = params.duration;
    this.drugFormDesc = params.drugFormDesc;
    this.tradeName = params.tradeName;
    this.verifyStatus = params.verifyStatus;
    this.reviewDate = params.reviewDate;
    this.ordSubType = params.ordSubType;
    this.freqDesc = params.freqDesc;
    this.urgent = params.urgent;
    this.routeType = params.routeType;
    this.stopDoctorId = params.stopDoctorId;
    this.notice = params.notice;
    this.discontinueReason = params.discontinueReason;
    this.verifyEmpId = params.verifyEmpId;
    this.mealTime = params.mealTime;
    this.rateTypeDesc = params.rateTypeDesc;
    this.solutionIndicator = params.solutionIndicator;
    this.reqDoctorId = params.reqDoctorId;
    this.updateUser = params.updateUser;
    this.updateTime = params.updateTime;
    this.drugForm = params.drugForm;
    this.mealTimeDesc = params.mealTimeDesc;
    this.mixTypeDesc = params.mixTypeDesc;
    this.stopDoctor = params.stopDoctor;
    this.freqSubNo = params.freqSubNo;
    this.centralLine = params.centralLine;
    this.createTime = params.createTime;
    this.inpNo = params.inpNo;
    this.orderGroupNo = params.orderGroupNo;
    this.reviewEmpName = params.reviewEmpName;
    this.productRouteDesc = params.productRouteDesc;
    this.stopDate = params.stopDate;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.MedicationRes',
      $: {
        orderType: js_to_java_1.default.String(this.orderType),
        orderDischargeStatus: js_to_java_1.default.String(
          this.orderDischargeStatus,
        ),
        moUnit: js_to_java_1.default.String(this.moUnit),
        endDate: js_to_java_1.default.String(this.endDate),
        advanced: js_to_java_1.default.String(this.advanced),
        supplFreqNo: js_to_java_1.default.String(this.supplFreqNo),
        mome: js_to_java_1.default.String(this.mome),
        routeDesc: js_to_java_1.default.String(this.routeDesc),
        drug: js_to_java_1.default.String(this.drug),
        preparationNo: js_to_java_1.default.String(this.preparationNo),
        rateType: js_to_java_1.default.String(this.rateType),
        selfIndicator: js_to_java_1.default.String(this.selfIndicator),
        discontinueType: js_to_java_1.default.String(this.discontinueType),
        ordFlag: js_to_java_1.default.String(this.ordFlag),
        isHistoryRec: js_to_java_1.default.String(this.isHistoryRec),
        actionStatus: js_to_java_1.default.String(this.actionStatus),
        solution: js_to_java_1.default.String(this.solution),
        reviewEmpId: js_to_java_1.default.String(this.reviewEmpId),
        reqDoctor: js_to_java_1.default.String(this.reqDoctor),
        durationUnit: js_to_java_1.default.String(this.durationUnit),
        supplFreqDetail: js_to_java_1.default.String(this.supplFreqDetail),
        orderSubNo: js_to_java_1.default.String(this.orderSubNo),
        specialMedication: js_to_java_1.default.String(this.specialMedication),
        patSouce: js_to_java_1.default.String(this.patSouce),
        ordStatus: js_to_java_1.default.String(this.ordStatus),
        verifyDate: js_to_java_1.default.String(this.verifyDate),
        orderNo: js_to_java_1.default.String(this.orderNo),
        supplFreqNoDesc: js_to_java_1.default.String(this.supplFreqNoDesc),
        updateUserId: js_to_java_1.default.String(this.updateUserId),
        productRoute: js_to_java_1.default.String(this.productRoute),
        rateUnit: js_to_java_1.default.String(this.rateUnit),
        primeOrderGroupNo: js_to_java_1.default.String(this.primeOrderGroupNo),
        reviewTimeOutFlagDesc: js_to_java_1.default.String(
          this.reviewTimeOutFlagDesc,
        ),
        prn: js_to_java_1.default.String(this.prn),
        verifyInfo: js_to_java_1.default.String(this.verifyInfo),
        ordStatusDesc: js_to_java_1.default.String(this.ordStatusDesc),
        advanceOtherCode: js_to_java_1.default.String(this.advanceOtherCode),
        route: js_to_java_1.default.String(this.route),
        routeParent: js_to_java_1.default.String(this.routeParent),
        verifyEmpName: js_to_java_1.default.String(this.verifyEmpName),
        reviewTimeOutFlag: js_to_java_1.default.String(this.reviewTimeOutFlag),
        reviewStatus: js_to_java_1.default.String(this.reviewStatus),
        mealTimeDetail: js_to_java_1.default.String(this.mealTimeDetail),
        startDate: js_to_java_1.default.String(this.startDate),
        specialMedicationDesc: js_to_java_1.default.String(
          this.specialMedicationDesc,
        ),
        dosage: js_to_java_1.default.String(this.dosage),
        mixType: js_to_java_1.default.String(this.mixType),
        drugCode: js_to_java_1.default.String(this.drugCode),
        ouptNo: js_to_java_1.default.String(this.ouptNo),
        historyOrderGroupNoList: this.historyOrderGroupNoList
          ? js_to_java_1.default.List(
              (this.historyOrderGroupNoList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        patId: js_to_java_1.default.String(this.patId),
        rateAmount: js_to_java_1.default.String(this.rateAmount),
        freq: js_to_java_1.default.String(this.freq),
        moAmount: js_to_java_1.default.String(this.moAmount),
        duration: js_to_java_1.default.String(this.duration),
        drugFormDesc: js_to_java_1.default.String(this.drugFormDesc),
        tradeName: js_to_java_1.default.String(this.tradeName),
        verifyStatus: js_to_java_1.default.String(this.verifyStatus),
        reviewDate: js_to_java_1.default.String(this.reviewDate),
        ordSubType: js_to_java_1.default.String(this.ordSubType),
        freqDesc: js_to_java_1.default.String(this.freqDesc),
        urgent: js_to_java_1.default.String(this.urgent),
        routeType: js_to_java_1.default.String(this.routeType),
        stopDoctorId: js_to_java_1.default.String(this.stopDoctorId),
        notice: js_to_java_1.default.String(this.notice),
        discontinueReason: js_to_java_1.default.String(this.discontinueReason),
        verifyEmpId: js_to_java_1.default.String(this.verifyEmpId),
        mealTime: js_to_java_1.default.String(this.mealTime),
        rateTypeDesc: js_to_java_1.default.String(this.rateTypeDesc),
        solutionIndicator: js_to_java_1.default.String(this.solutionIndicator),
        reqDoctorId: js_to_java_1.default.String(this.reqDoctorId),
        updateUser: js_to_java_1.default.String(this.updateUser),
        updateTime: js_to_java_1.default.String(this.updateTime),
        drugForm: js_to_java_1.default.String(this.drugForm),
        mealTimeDesc: js_to_java_1.default.String(this.mealTimeDesc),
        mixTypeDesc: js_to_java_1.default.String(this.mixTypeDesc),
        stopDoctor: js_to_java_1.default.String(this.stopDoctor),
        freqSubNo: js_to_java_1.default.String(this.freqSubNo),
        centralLine: js_to_java_1.default.String(this.centralLine),
        createTime: js_to_java_1.default.String(this.createTime),
        inpNo: js_to_java_1.default.String(this.inpNo),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        reviewEmpName: js_to_java_1.default.String(this.reviewEmpName),
        productRouteDesc: js_to_java_1.default.String(this.productRouteDesc),
        stopDate: js_to_java_1.default.String(this.stopDate),
      },
    };
  }
}
exports.MedicationRes = MedicationRes;
//generate by interpret-cli dubbo2.js
