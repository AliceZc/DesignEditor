'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class AlertReq {
  constructor(params) {
    this.alertDesc = params.alertDesc;
    this.alertType = params.alertType;
    this.alertCode = params.alertCode;
    this.classifiedIndicator = params.classifiedIndicator;
    this.patId = params.patId;
    this.alterNo = params.alterNo;
    this.dictEntry = params.dictEntry;
    this.deleteReason = params.deleteReason;
    this.doctor = params.doctor;
    this.doctorId = params.doctorId;
    this.validFromDate = params.validFromDate;
    this.dataSouce = params.dataSouce;
    this.validToDate = params.validToDate;
    this.colum = params.colum;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.req.AlertReq',
      $: {
        alertDesc: js_to_java_1.default.String(this.alertDesc),
        alertType: js_to_java_1.default.String(this.alertType),
        alertCode: js_to_java_1.default.String(this.alertCode),
        classifiedIndicator: js_to_java_1.default.String(
          this.classifiedIndicator,
        ),
        patId: js_to_java_1.default.String(this.patId),
        alterNo: js_to_java_1.default.String(this.alterNo),
        dictEntry: this.dictEntry
          ? js_to_java_1.default.List(
              (this.dictEntry || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        deleteReason: js_to_java_1.default.String(this.deleteReason),
        doctor: js_to_java_1.default.String(this.doctor),
        doctorId: js_to_java_1.default.String(this.doctorId),
        validFromDate: js_to_java_1.default.String(this.validFromDate),
        dataSouce: js_to_java_1.default.String(this.dataSouce),
        validToDate: js_to_java_1.default.String(this.validToDate),
        colum: js_to_java_1.default.String(this.colum),
      },
    };
  }
}
exports.AlertReq = AlertReq;
//generate by interpret-cli dubbo2.js
