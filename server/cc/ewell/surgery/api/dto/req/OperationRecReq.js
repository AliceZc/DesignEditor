'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OperationRecReq {
  constructor(params) {
    this.isImplant = params.isImplant;
    this.operationStatus = params.operationStatus;
    this.createUserId = params.createUserId;
    this.anesthesiaType = params.anesthesiaType;
    this.chiefSurgeonId = params.chiefSurgeonId;
    this.assistantName = params.assistantName;
    this.patId = params.patId;
    this.anaesthesiologistName = params.anaesthesiologistName;
    this.operationCode = params.operationCode;
    this.remark = params.remark;
    this.createUserName = params.createUserName;
    this.chiefSurgeonName = params.chiefSurgeonName;
    this.doctorName = params.doctorName;
    this.anesthesiaUnit = params.anesthesiaUnit;
    this.doctorId = params.doctorId;
    this.operationClass = params.operationClass;
    this.preOpDiagnosis = params.preOpDiagnosis;
    this.isAppointment = params.isAppointment;
    this.operationTypeMap = params.operationTypeMap;
    this.anesthesiaTime = params.anesthesiaTime;
    this.operationName = params.operationName;
    this.planDate = params.planDate;
    this.visitType = params.visitType;
    this.anaesthesiologistId = params.anaesthesiologistId;
    this.transportation = params.transportation;
    this.assistantId = params.assistantId;
    this.operationNo = params.operationNo;
    this.specialTransfer = params.specialTransfer;
    this.operationType = params.operationType;
    this.category = params.category;
    this.preOpPrepareStatus = params.preOpPrepareStatus;
    this.visitNo = params.visitNo;
  }
  __fields2java() {
    let operationTypeMapMapTransfer = new Map();
    for (let mapKey in this.operationTypeMap) {
      operationTypeMapMapTransfer.set(
        js_to_java_1.default.String(mapKey),
        js_to_java_1.default.String(this.operationTypeMap[mapKey]),
      );
    }
    return {
      $class: 'cc.ewell.surgery.api.dto.req.OperationRecReq',
      $: {
        isImplant: js_to_java_1.default.String(this.isImplant),
        operationStatus: js_to_java_1.default.String(this.operationStatus),
        createUserId: js_to_java_1.default.String(this.createUserId),
        anesthesiaType: js_to_java_1.default.String(this.anesthesiaType),
        chiefSurgeonId: js_to_java_1.default.String(this.chiefSurgeonId),
        assistantName: js_to_java_1.default.String(this.assistantName),
        patId: js_to_java_1.default.String(this.patId),
        anaesthesiologistName: js_to_java_1.default.String(
          this.anaesthesiologistName,
        ),
        operationCode: js_to_java_1.default.String(this.operationCode),
        remark: js_to_java_1.default.String(this.remark),
        createUserName: js_to_java_1.default.String(this.createUserName),
        chiefSurgeonName: js_to_java_1.default.String(this.chiefSurgeonName),
        doctorName: js_to_java_1.default.String(this.doctorName),
        anesthesiaUnit: js_to_java_1.default.String(this.anesthesiaUnit),
        doctorId: js_to_java_1.default.String(this.doctorId),
        operationClass: js_to_java_1.default.String(this.operationClass),
        preOpDiagnosis: js_to_java_1.default.String(this.preOpDiagnosis),
        isAppointment: js_to_java_1.default.String(this.isAppointment),
        operationTypeMap: js_to_java_1.default.Map(operationTypeMapMapTransfer),
        anesthesiaTime: js_to_java_1.default.String(this.anesthesiaTime),
        operationName: js_to_java_1.default.String(this.operationName),
        planDate: js_to_java_1.default.String(this.planDate),
        visitType: js_to_java_1.default.String(this.visitType),
        anaesthesiologistId: js_to_java_1.default.String(
          this.anaesthesiologistId,
        ),
        transportation: js_to_java_1.default.String(this.transportation),
        assistantId: js_to_java_1.default.String(this.assistantId),
        operationNo: js_to_java_1.default.String(this.operationNo),
        specialTransfer: js_to_java_1.default.String(this.specialTransfer),
        operationType: js_to_java_1.default.String(this.operationType),
        category: js_to_java_1.default.String(this.category),
        preOpPrepareStatus: js_to_java_1.default.String(
          this.preOpPrepareStatus,
        ),
        visitNo: js_to_java_1.default.String(this.visitNo),
      },
    };
  }
}
exports.OperationRecReq = OperationRecReq;
//generate by interpret-cli dubbo2.js
