'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class InpClinicRecRes {
  constructor(params) {
    this.englishName = params.englishName;
    this.patId = params.patId;
    this.adminssionTime = params.adminssionTime;
    this.illNum = params.illNum;
    this.inpDays = params.inpDays;
    this.diagCode = params.diagCode;
    this.doctorNum = params.doctorNum;
    this.allNum = params.allNum;
    this.result = params.result;
    this.assocId = params.assocId;
    this.altertDesc = params.altertDesc;
    this.doctorId = params.doctorId;
    this.reviewDate = params.reviewDate;
    this.alert = params.alert;
    this.attendingId = params.attendingId;
    this.attending = params.attending;
    this.assoc = params.assoc;
    this.assoNum = params.assoNum;
    this.isReview = params.isReview;
    this.wardCode = params.wardCode;
    this.infectNum = params.infectNum;
    this.dischargeNum = params.dischargeNum;
    this.sex = params.sex;
    this.isAllert = params.isAllert;
    this.mrn = params.mrn;
    this.ixNum = params.ixNum;
    this.allergy = params.allergy;
    this.diagName = params.diagName;
    this.isAllergy = params.isAllergy;
    this.birthDate = params.birthDate;
    this.adr = params.adr;
    this.doctor = params.doctor;
    this.altertCode = params.altertCode;
    this.planDischargeTime = params.planDischargeTime;
    this.hkicNo = params.hkicNo;
    this.referral = params.referral;
    this.cnName = params.cnName;
    this.bedNo = params.bedNo;
    this.clinicStatus = params.clinicStatus;
    this.quarantineNum = params.quarantineNum;
    this.inpNo = params.inpNo;
    this.newNum = params.newNum;
    this.age = params.age;
    this.referalId = params.referalId;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.InpClinicRecRes',
      $: {
        englishName: js_to_java_1.default.String(this.englishName),
        patId: js_to_java_1.default.String(this.patId),
        adminssionTime: js_to_java_1.default.String(this.adminssionTime),
        illNum: js_to_java_1.default.String(this.illNum),
        inpDays: js_to_java_1.default.String(this.inpDays),
        diagCode: js_to_java_1.default.String(this.diagCode),
        doctorNum: js_to_java_1.default.String(this.doctorNum),
        allNum: js_to_java_1.default.String(this.allNum),
        result: js_to_java_1.default.String(this.result),
        assocId: js_to_java_1.default.String(this.assocId),
        altertDesc: js_to_java_1.default.String(this.altertDesc),
        doctorId: js_to_java_1.default.String(this.doctorId),
        reviewDate: this.reviewDate,
        alert: this.alert
          ? js_to_java_1.default.List(
              (this.alert || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        attendingId: js_to_java_1.default.String(this.attendingId),
        attending: js_to_java_1.default.String(this.attending),
        assoc: js_to_java_1.default.String(this.assoc),
        assoNum: js_to_java_1.default.String(this.assoNum),
        isReview: js_to_java_1.default.String(this.isReview),
        wardCode: js_to_java_1.default.String(this.wardCode),
        infectNum: js_to_java_1.default.String(this.infectNum),
        dischargeNum: js_to_java_1.default.String(this.dischargeNum),
        sex: js_to_java_1.default.String(this.sex),
        isAllert: js_to_java_1.default.String(this.isAllert),
        mrn: js_to_java_1.default.String(this.mrn),
        ixNum: js_to_java_1.default.String(this.ixNum),
        allergy: this.allergy
          ? js_to_java_1.default.List(
              (this.allergy || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        diagName: js_to_java_1.default.String(this.diagName),
        isAllergy: js_to_java_1.default.String(this.isAllergy),
        birthDate: js_to_java_1.default.String(this.birthDate),
        adr: this.adr
          ? js_to_java_1.default.List(
              (this.adr || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        doctor: js_to_java_1.default.String(this.doctor),
        altertCode: js_to_java_1.default.String(this.altertCode),
        planDischargeTime: js_to_java_1.default.String(this.planDischargeTime),
        hkicNo: js_to_java_1.default.String(this.hkicNo),
        referral: js_to_java_1.default.String(this.referral),
        cnName: js_to_java_1.default.String(this.cnName),
        bedNo: js_to_java_1.default.String(this.bedNo),
        clinicStatus: this.clinicStatus
          ? js_to_java_1.default.List(
              (this.clinicStatus || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        quarantineNum: js_to_java_1.default.String(this.quarantineNum),
        inpNo: js_to_java_1.default.String(this.inpNo),
        newNum: js_to_java_1.default.String(this.newNum),
        age: js_to_java_1.default.String(this.age),
        referalId: js_to_java_1.default.String(this.referalId),
      },
    };
  }
}
exports.InpClinicRecRes = InpClinicRecRes;
//generate by interpret-cli dubbo2.js
