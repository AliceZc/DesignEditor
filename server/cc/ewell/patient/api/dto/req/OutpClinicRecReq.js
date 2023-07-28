'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OutpClinicRecReq {
  constructor(params) {
    this.beforDate = params.beforDate;
    this.patientName = params.patientName;
    this.patId = params.patId;
    this.mrn = params.mrn;
    this.outpNo = params.outpNo;
    this.afterDate = params.afterDate;
    this.queryDate = params.queryDate;
    this.visitStatus = params.visitStatus;
    this.doctorId = params.doctorId;
    this.noConsulStatus = params.noConsulStatus;
    this.examMap = params.examMap;
    this.consulStatus = params.consulStatus;
    this.deptCode = params.deptCode;
    this.labMap = params.labMap;
    this.status = params.status;
    this.visitNo = params.visitNo;
    this.queueStatus = params.queueStatus;
  }
  __fields2java() {
    let examMapMapTransfer = new Map();
    for (let mapKey in this.examMap) {
      examMapMapTransfer.set(
        js_to_java_1.default.String(mapKey),
        js_to_java_1.default.String(this.examMap[mapKey]),
      );
    }
    let labMapMapTransfer = new Map();
    for (let mapKey in this.labMap) {
      labMapMapTransfer.set(
        js_to_java_1.default.String(mapKey),
        js_to_java_1.default.String(this.labMap[mapKey]),
      );
    }
    return {
      $class: 'cc.ewell.patient.api.dto.req.OutpClinicRecReq',
      $: {
        beforDate: js_to_java_1.default.String(this.beforDate),
        patientName: js_to_java_1.default.String(this.patientName),
        patId: js_to_java_1.default.String(this.patId),
        mrn: js_to_java_1.default.String(this.mrn),
        outpNo: js_to_java_1.default.String(this.outpNo),
        afterDate: js_to_java_1.default.String(this.afterDate),
        queryDate: js_to_java_1.default.String(this.queryDate),
        visitStatus: js_to_java_1.default.String(this.visitStatus),
        doctorId: js_to_java_1.default.String(this.doctorId),
        noConsulStatus: js_to_java_1.default.String(this.noConsulStatus),
        examMap: js_to_java_1.default.Map(examMapMapTransfer),
        consulStatus: js_to_java_1.default.String(this.consulStatus),
        deptCode: js_to_java_1.default.String(this.deptCode),
        labMap: js_to_java_1.default.Map(labMapMapTransfer),
        status: js_to_java_1.default.String(this.status),
        visitNo: js_to_java_1.default.String(this.visitNo),
        queueStatus: js_to_java_1.default.String(this.queueStatus),
      },
    };
  }
}
exports.OutpClinicRecReq = OutpClinicRecReq;
//generate by interpret-cli dubbo2.js
