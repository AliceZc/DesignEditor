'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class PatientReq {
  constructor(params) {
    this.doctor = params.doctor;
    this.doctorId = params.doctorId;
    this.isDrugAllergy = params.isDrugAllergy;
    this.patId = params.patId;
    this.isFoodAllergy = params.isFoodAllergy;
    this.mrn = params.mrn;
    this.department = params.department;
    this.clinicMessage = params.clinicMessage;
    this.patientStatus = params.patientStatus;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.req.PatientReq',
      $: {
        doctor: js_to_java_1.default.String(this.doctor),
        doctorId: js_to_java_1.default.String(this.doctorId),
        isDrugAllergy: js_to_java_1.default.String(this.isDrugAllergy),
        patId: js_to_java_1.default.String(this.patId),
        isFoodAllergy: js_to_java_1.default.String(this.isFoodAllergy),
        mrn: js_to_java_1.default.String(this.mrn),
        department: js_to_java_1.default.String(this.department),
        clinicMessage: js_to_java_1.default.String(this.clinicMessage),
        patientStatus: js_to_java_1.default.String(this.patientStatus),
      },
    };
  }
}
exports.PatientReq = PatientReq;
//generate by interpret-cli dubbo2.js
