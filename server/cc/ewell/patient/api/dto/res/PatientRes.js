'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class PatientRes {
  constructor(params) {
    this.englishName = params.englishName;
    this.appointTime = params.appointTime;
    this.patId = params.patId;
    this.givenName = params.givenName;
    this.sex = params.sex;
    this.checkInTime = params.checkInTime;
    this.adminssionTime = params.adminssionTime;
    this.diagCode = params.diagCode;
    this.sumName = params.sumName;
    this.room = params.room;
    this.doctor = params.doctor;
    this.ehrNo = params.ehrNo;
    this.result = params.result;
    this.hkicNo = params.hkicNo;
    this.referral = params.referral;
    this.cnName = params.cnName;
    this.doctorId = params.doctorId;
    this.bedNo = params.bedNo;
    this.assoc = params.assoc;
    this.block = params.block;
    this.wardCode = params.wardCode;
    this.age = params.age;
    this.referalId = params.referalId;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.PatientRes',
      $: {
        englishName: js_to_java_1.default.String(this.englishName),
        appointTime: js_to_java_1.default.String(this.appointTime),
        patId: js_to_java_1.default.String(this.patId),
        givenName: js_to_java_1.default.String(this.givenName),
        sex: js_to_java_1.default.String(this.sex),
        checkInTime: js_to_java_1.default.String(this.checkInTime),
        adminssionTime: js_to_java_1.default.String(this.adminssionTime),
        diagCode: js_to_java_1.default.String(this.diagCode),
        sumName: js_to_java_1.default.String(this.sumName),
        room: js_to_java_1.default.String(this.room),
        doctor: js_to_java_1.default.String(this.doctor),
        ehrNo: js_to_java_1.default.String(this.ehrNo),
        result: js_to_java_1.default.String(this.result),
        hkicNo: js_to_java_1.default.String(this.hkicNo),
        referral: js_to_java_1.default.String(this.referral),
        cnName: js_to_java_1.default.String(this.cnName),
        doctorId: js_to_java_1.default.String(this.doctorId),
        bedNo: js_to_java_1.default.String(this.bedNo),
        assoc: js_to_java_1.default.String(this.assoc),
        block: js_to_java_1.default.String(this.block),
        wardCode: js_to_java_1.default.String(this.wardCode),
        age: js_to_java_1.default.String(this.age),
        referalId: js_to_java_1.default.String(this.referalId),
      },
    };
  }
}
exports.PatientRes = PatientRes;
//generate by interpret-cli dubbo2.js
