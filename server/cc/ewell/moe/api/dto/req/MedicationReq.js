'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class MedicationReq {
  constructor(params) {
    this.patientId = params.patientId;
    this.visitNos = params.visitNos;
    this.orderStatus = params.orderStatus;
    this.hisDate = params.hisDate;
    this.drugType = params.drugType;
    this.discontinueType = params.discontinueType;
    this.doctorName = params.doctorName;
    this.visitType = params.visitType;
    this.verifyStatus = params.verifyStatus;
    this.doctorId = params.doctorId;
    this.orderSubType = params.orderSubType;
    this.wardCode = params.wardCode;
    this.stopDoctorId = params.stopDoctorId;
    this.overrideStatus = params.overrideStatus;
    this.orderNo = params.orderNo;
    this.discontinueReason = params.discontinueReason;
    this.queryType = params.queryType;
    this.stopDoctor = params.stopDoctor;
    this.visitNo = params.visitNo;
    this.endReview = params.endReview;
    this.orderGroupNo = params.orderGroupNo;
    this.queryTime = params.queryTime;
    this.reviewStatus = params.reviewStatus;
    this.orders = params.orders;
    this.doctorOrdConfirm = params.doctorOrdConfirm;
    this.reviewTimeDate = params.reviewTimeDate;
    this.orderGroupNos = params.orderGroupNos;
    this.stopDate = params.stopDate;
    this.selectOrType = params.selectOrType;
    this.reviewTime = params.reviewTime;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.MedicationReq',
      $: {
        patientId: js_to_java_1.default.String(this.patientId),
        visitNos: this.visitNos
          ? js_to_java_1.default.List(
              (this.visitNos || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        orderStatus: js_to_java_1.default.String(this.orderStatus),
        hisDate: js_to_java_1.default.String(this.hisDate),
        drugType: js_to_java_1.default.String(this.drugType),
        discontinueType: js_to_java_1.default.String(this.discontinueType),
        doctorName: js_to_java_1.default.String(this.doctorName),
        visitType: js_to_java_1.default.String(this.visitType),
        verifyStatus: js_to_java_1.default.String(this.verifyStatus),
        doctorId: js_to_java_1.default.String(this.doctorId),
        orderSubType: js_to_java_1.default.String(this.orderSubType),
        wardCode: js_to_java_1.default.String(this.wardCode),
        stopDoctorId: js_to_java_1.default.String(this.stopDoctorId),
        overrideStatus: js_to_java_1.default.String(this.overrideStatus),
        orderNo: js_to_java_1.default.String(this.orderNo),
        discontinueReason: js_to_java_1.default.String(this.discontinueReason),
        queryType: js_to_java_1.default.String(this.queryType),
        stopDoctor: js_to_java_1.default.String(this.stopDoctor),
        visitNo: js_to_java_1.default.String(this.visitNo),
        endReview: this.endReview,
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        queryTime: js_to_java_1.default.String(this.queryTime),
        reviewStatus: js_to_java_1.default.String(this.reviewStatus),
        orders: js_to_java_1.default.array(
          'java.lang.String',
          (this.orders || []).map((paramItem) => {
            return js_to_java_1.default.String(paramItem);
          }),
        ),
        doctorOrdConfirm: js_to_java_1.default.String(this.doctorOrdConfirm),
        reviewTimeDate: this.reviewTimeDate,
        orderGroupNos: this.orderGroupNos
          ? js_to_java_1.default.List(
              (this.orderGroupNos || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        stopDate: js_to_java_1.default.String(this.stopDate),
        selectOrType: js_to_java_1.default.String(this.selectOrType),
        reviewTime: js_to_java_1.default.String(this.reviewTime),
      },
    };
  }
}
exports.MedicationReq = MedicationReq;
//generate by interpret-cli dubbo2.js
