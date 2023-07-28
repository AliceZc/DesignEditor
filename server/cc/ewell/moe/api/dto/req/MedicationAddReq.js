'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class MedicationAddReq {
  constructor(params) {
    this.orderType = params.orderType;
    this.orderDischargeStatus = params.orderDischargeStatus;
    this.moUnit = params.moUnit;
    this.createUserId = params.createUserId;
    this.strength = params.strength;
    this.patientId = params.patientId;
    this.endDate = params.endDate;
    this.advanced = params.advanced;
    this.supplFreqNo = params.supplFreqNo;
    this.overrideReason = params.overrideReason;
    this.preparationNo = params.preparationNo;
    this.rateType = params.rateType;
    this.isHistoryRec = params.isHistoryRec;
    this.visitType = params.visitType;
    this.actionStatus = params.actionStatus;
    this.solution = params.solution;
    this.groupIndicator = params.groupIndicator;
    this.reviewEmpId = params.reviewEmpId;
    this.reqDoctor = params.reqDoctor;
    this.durationUnit = params.durationUnit;
    this.supplFreqDetail = params.supplFreqDetail;
    this.orderSubNo = params.orderSubNo;
    this.condition = params.condition;
    this.orderStatus = params.orderStatus;
    this.orderNo = params.orderNo;
    this.updateUserId = params.updateUserId;
    this.defaultRoute = params.defaultRoute;
    this.rateUnit = params.rateUnit;
    this.primeOrderGroupNo = params.primeOrderGroupNo;
    this.prn = params.prn;
    this.route = params.route;
    this.ordDeptCode = params.ordDeptCode;
    this.drugName = params.drugName;
    this.ordDept = params.ordDept;
    this.conditionDetail = params.conditionDetail;
    this.startDate = params.startDate;
    this.dosage = params.dosage;
    this.mixType = params.mixType;
    this.drugCode = params.drugCode;
    this.rateAmount = params.rateAmount;
    this.freq = params.freq;
    this.moAmount = params.moAmount;
    this.duration = params.duration;
    this.tradeName = params.tradeName;
    this.reviewDate = params.reviewDate;
    this.orderSubType = params.orderSubType;
    this.urgent = params.urgent;
    this.stopDoctorId = params.stopDoctorId;
    this.notice = params.notice;
    this.mealTime = params.mealTime;
    this.solutionIndicator = params.solutionIndicator;
    this.reqDoctorId = params.reqDoctorId;
    this.updateUser = params.updateUser;
    this.drugForm = params.drugForm;
    this.stopDoctor = params.stopDoctor;
    this.freqSubNo = params.freqSubNo;
    this.centralLine = params.centralLine;
    this.visitNo = params.visitNo;
    this.orderGroupNo = params.orderGroupNo;
    this.reviewEmpName = params.reviewEmpName;
    this.createUser = params.createUser;
    this.stopDate = params.stopDate;
    this.ddiStatus = params.ddiStatus;
    this.vtmItemCode = params.vtmItemCode;
    this.vtmCode = params.vtmCode;
    this.vtmDesc = params.vtmDesc;
    this.vtmShortDesc = params.vtmShortDesc;
    this.formExtraId = params.formExtraId;
    this.parenteralMethodsId = params.parenteralMethodsId;
    this.specialStatusId = params.specialStatusId;
    this.volume = params.volume;
    this.isParenteral = params.isParenteral;
    this.routeCategory = params.routeCategory;
    this.brandedGenericStatus = params.brandedGenericStatus;
    this.vmpItemCode = params.vmpItemCode;
    this.searchType = params.searchType;
    this.vtmGroupAlias = params.vtmGroupAlias;
    this.drugFullName = params.drugFullName;
    this.itemCode = params.itemCode;
    this.itemLevel = params.itemLevel;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.MedicationAddReq',
      $: {
        orderType: js_to_java_1.default.String(this.orderType),
        orderDischargeStatus: js_to_java_1.default.String(
          this.orderDischargeStatus,
        ),
        moUnit: js_to_java_1.default.String(this.moUnit),
        createUserId: js_to_java_1.default.String(this.createUserId),
        patientId: js_to_java_1.default.String(this.patientId),
        endDate: js_to_java_1.default.String(this.endDate),
        advanced: js_to_java_1.default.String(this.advanced),
        supplFreqNo: js_to_java_1.default.String(this.supplFreqNo),
        overrideReason: js_to_java_1.default.String(this.overrideReason),
        preparationNo: js_to_java_1.default.String(this.preparationNo),
        rateType: js_to_java_1.default.String(this.rateType),
        isHistoryRec: js_to_java_1.default.String(this.isHistoryRec),
        visitType: js_to_java_1.default.String(this.visitType),
        actionStatus: js_to_java_1.default.String(this.actionStatus),
        solution: js_to_java_1.default.String(this.solution),
        groupIndicator: js_to_java_1.default.String(this.groupIndicator),
        reviewEmpId: js_to_java_1.default.String(this.reviewEmpId),
        reqDoctor: js_to_java_1.default.String(this.reqDoctor),
        durationUnit: js_to_java_1.default.String(this.durationUnit),
        supplFreqDetail: js_to_java_1.default.String(this.supplFreqDetail),
        orderSubNo: js_to_java_1.default.Integer(this.orderSubNo),
        condition: js_to_java_1.default.String(this.condition),
        orderStatus: js_to_java_1.default.String(this.orderStatus),
        orderNo: js_to_java_1.default.String(this.orderNo),
        updateUserId: js_to_java_1.default.String(this.updateUserId),
        defaultRoute: js_to_java_1.default.String(this.defaultRoute),
        rateUnit: js_to_java_1.default.String(this.rateUnit),
        primeOrderGroupNo: js_to_java_1.default.String(this.primeOrderGroupNo),
        prn: js_to_java_1.default.String(this.prn),
        route: js_to_java_1.default.String(this.route),
        ordDeptCode: js_to_java_1.default.String(this.ordDeptCode),
        drugName: js_to_java_1.default.String(this.drugName),
        ordDept: js_to_java_1.default.String(this.ordDept),
        conditionDetail: js_to_java_1.default.String(this.conditionDetail),
        startDate: js_to_java_1.default.String(this.startDate),
        dosage: js_to_java_1.default.String(this.dosage),
        mixType: js_to_java_1.default.String(this.mixType),
        drugCode: js_to_java_1.default.String(this.drugCode),
        rateAmount: js_to_java_1.default.Long(this.rateAmount),
        freq: js_to_java_1.default.String(this.freq),
        moAmount: js_to_java_1.default.Double(this.moAmount),
        duration: js_to_java_1.default.String(this.duration),
        tradeName: js_to_java_1.default.String(this.tradeName),
        reviewDate: js_to_java_1.default.String(this.reviewDate),
        orderSubType: js_to_java_1.default.String(this.orderSubType),
        urgent: js_to_java_1.default.String(this.urgent),
        stopDoctorId: js_to_java_1.default.String(this.stopDoctorId),
        notice: js_to_java_1.default.String(this.notice),
        mealTime: js_to_java_1.default.String(this.mealTime),
        solutionIndicator: js_to_java_1.default.String(this.solutionIndicator),
        reqDoctorId: js_to_java_1.default.String(this.reqDoctorId),
        updateUser: js_to_java_1.default.String(this.updateUser),
        drugForm: js_to_java_1.default.String(this.drugForm),
        stopDoctor: js_to_java_1.default.String(this.stopDoctor),
        freqSubNo: js_to_java_1.default.String(this.freqSubNo),
        centralLine: js_to_java_1.default.String(this.centralLine),
        visitNo: js_to_java_1.default.String(this.visitNo),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        reviewEmpName: js_to_java_1.default.String(this.reviewEmpName),
        createUser: js_to_java_1.default.String(this.createUser),
        stopDate: js_to_java_1.default.String(this.stopDate),
        strength: js_to_java_1.default.String(this.strength),
        ddiStatus: js_to_java_1.default.String(this.ddiStatus),
        vtmItemCode: js_to_java_1.default.String(this.vtmItemCode),
        vtmCode: js_to_java_1.default.String(this.vtmCode),
        vtmDesc: js_to_java_1.default.String(this.vtmDesc),
        formExtraId: js_to_java_1.default.String(this.formExtraId),
        parenteralMethodsId: js_to_java_1.default.String(
          this.parenteralMethodsId,
        ),
        specialStatusId: js_to_java_1.default.String(this.specialStatusId),
        volume: js_to_java_1.default.String(this.volume),
        isParenteral: js_to_java_1.default.String(this.isParenteral),
        routeCategory: js_to_java_1.default.String(this.routeCategory),
        brandedGenericStatus: js_to_java_1.default.String(
          this.brandedGenericStatus,
        ),
        vmpItemCode: js_to_java_1.default.String(this.vmpItemCode),
        vtmShortDesc: js_to_java_1.default.String(this.vtmShortDesc),
        searchType: js_to_java_1.default.String(this.searchType),
        vtmGroupAlias: js_to_java_1.default.String(this.vtmGroupAlias),
        drugFullName: js_to_java_1.default.String(this.drugFullName),
        itemCode: js_to_java_1.default.String(this.itemCode),
        itemLevel: js_to_java_1.default.String(this.itemLevel),
      },
    };
  }
}
exports.MedicationAddReq = MedicationAddReq;
//generate by interpret-cli dubbo2.js
