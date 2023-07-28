'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class MedicalRecReq {
  constructor(params) {
    this.immunizationHistory = params.immunizationHistory;
    this.outpNo = params.outpNo;
    this.medicalNo = params.medicalNo;
    this.patId = params.patId;
    this.drugHistory = params.drugHistory;
    this.inpNo = params.inpNo;
    this.familyHistory = params.familyHistory;
    this.medicalHistory = params.medicalHistory;
    this.socialHistory = params.socialHistory;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.req.MedicalRecReq',
      $: {
        immunizationHistory: js_to_java_1.default.String(
          this.immunizationHistory,
        ),
        outpNo: js_to_java_1.default.String(this.outpNo),
        medicalNo: js_to_java_1.default.String(this.medicalNo),
        patId: js_to_java_1.default.String(this.patId),
        drugHistory: js_to_java_1.default.String(this.drugHistory),
        inpNo: js_to_java_1.default.String(this.inpNo),
        familyHistory: js_to_java_1.default.String(this.familyHistory),
        medicalHistory: js_to_java_1.default.String(this.medicalHistory),
        socialHistory: js_to_java_1.default.String(this.socialHistory),
      },
    };
  }
}
exports.MedicalRecReq = MedicalRecReq;
//generate by interpret-cli dubbo2.js
