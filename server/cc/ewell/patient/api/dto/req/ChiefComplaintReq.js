'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class ChiefComplaintReq {
  constructor(params) {
    this.doctor = params.doctor;
    this.doctorId = params.doctorId;
    this.patId = params.patId;
    this.chiefComplaint = params.chiefComplaint;
    this.chiefNo = params.chiefNo;
    this.visitNo = params.visitNo;
    this.visitType = params.visitType;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.req.ChiefComplaintReq',
      $: {
        doctor: js_to_java_1.default.String(this.doctor),
        doctorId: js_to_java_1.default.String(this.doctorId),
        patId: js_to_java_1.default.String(this.patId),
        chiefComplaint: js_to_java_1.default.String(this.chiefComplaint),
        chiefNo: js_to_java_1.default.String(this.chiefNo),
        visitNo: js_to_java_1.default.String(this.visitNo),
        visitType: js_to_java_1.default.String(this.visitType),
      },
    };
  }
}
exports.ChiefComplaintReq = ChiefComplaintReq;
//generate by interpret-cli dubbo2.js
