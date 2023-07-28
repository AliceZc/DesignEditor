'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OutpClinicRecRes {
  constructor(params) {
    this.englishName = params.englishName;
    this.appointTime = params.appointTime;
    this.patId = params.patId;
    this.sex = params.sex;
    this.checkInTime = params.checkInTime;
    this.givenName = params.givenName;
    this.mrn = params.mrn;
    this.birthDate = params.birthDate;
    this.sumName = params.sumName;
    this.outpNo = params.outpNo;
    this.hkicNo = params.hkicNo;
    this.visitDept = params.visitDept;
    this.cnName = params.cnName;
    this.visitDate = params.visitDate;
    this.visitDeptCode = params.visitDeptCode;
    this.consulStatus = params.consulStatus;
    this.age = params.age;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.OutpClinicRecRes',
      $: {
        englishName: js_to_java_1.default.String(this.englishName),
        appointTime: js_to_java_1.default.String(this.appointTime),
        patId: js_to_java_1.default.String(this.patId),
        sex: js_to_java_1.default.String(this.sex),
        checkInTime: js_to_java_1.default.String(this.checkInTime),
        givenName: js_to_java_1.default.String(this.givenName),
        mrn: js_to_java_1.default.String(this.mrn),
        birthDate: js_to_java_1.default.String(this.birthDate),
        sumName: js_to_java_1.default.String(this.sumName),
        outpNo: js_to_java_1.default.String(this.outpNo),
        hkicNo: js_to_java_1.default.String(this.hkicNo),
        visitDept: js_to_java_1.default.String(this.visitDept),
        cnName: js_to_java_1.default.String(this.cnName),
        visitDate: js_to_java_1.default.String(this.visitDate),
        visitDeptCode: js_to_java_1.default.String(this.visitDeptCode),
        consulStatus: js_to_java_1.default.String(this.consulStatus),
        age: js_to_java_1.default.String(this.age),
      },
    };
  }
}
exports.OutpClinicRecRes = OutpClinicRecRes;
//generate by interpret-cli dubbo2.js
