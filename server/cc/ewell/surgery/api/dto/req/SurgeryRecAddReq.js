'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SurgeryRecAddReq {
  constructor(params) {
    this.surgeryDesc = params.surgeryDesc;
    this.createUserId = params.createUserId;
    this.surgeryCode = params.surgeryCode;
    this.procedureCode = params.procedureCode;
    this.surgeryRecNo = params.surgeryRecNo;
    this.patId = params.patId;
    this.surgeryLevel = params.surgeryLevel;
    this.hisDate = params.hisDate;
    this.remark = params.remark;
    this.operEndDate = params.operEndDate;
    this.outpNo = params.outpNo;
    this.doctorName = params.doctorName;
    this.orderTime = params.orderTime;
    this.patSource = params.patSource;
    this.operStartDate = params.operStartDate;
    this.doctorId = params.doctorId;
    this.inpNo = params.inpNo;
    this.procedureName = params.procedureName;
    this.createUser = params.createUser;
    this.startTime = params.startTime;
    this.endTime = params.endTime;
    this.surgeryStatus = params.surgeryStatus;
    this.surgery = params.surgery;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.surgery.api.dto.req.SurgeryRecAddReq',
      $: {
        surgeryDesc: js_to_java_1.default.String(this.surgeryDesc),
        createUserId: js_to_java_1.default.String(this.createUserId),
        surgeryCode: js_to_java_1.default.String(this.surgeryCode),
        procedureCode: js_to_java_1.default.String(this.procedureCode),
        surgeryRecNo: js_to_java_1.default.String(this.surgeryRecNo),
        patId: js_to_java_1.default.String(this.patId),
        surgeryLevel: js_to_java_1.default.String(this.surgeryLevel),
        hisDate: js_to_java_1.default.String(this.hisDate),
        remark: js_to_java_1.default.String(this.remark),
        operEndDate: js_to_java_1.default.String(this.operEndDate),
        outpNo: js_to_java_1.default.String(this.outpNo),
        doctorName: js_to_java_1.default.String(this.doctorName),
        orderTime: js_to_java_1.default.String(this.orderTime),
        patSource: js_to_java_1.default.String(this.patSource),
        operStartDate: js_to_java_1.default.String(this.operStartDate),
        doctorId: js_to_java_1.default.String(this.doctorId),
        inpNo: js_to_java_1.default.String(this.inpNo),
        procedureName: js_to_java_1.default.String(this.procedureName),
        createUser: js_to_java_1.default.String(this.createUser),
        startTime: this.startTime,
        endTime: this.endTime,
        surgeryStatus: js_to_java_1.default.String(this.surgeryStatus),
        surgery: js_to_java_1.default.String(this.surgery),
      },
    };
  }
}
exports.SurgeryRecAddReq = SurgeryRecAddReq;
//generate by interpret-cli dubbo2.js
