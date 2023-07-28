'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class AdrReq {
  constructor(params) {
    this.severity = params.severity;
    this.drugComp = params.drugComp;
    this.drugCode = params.drugCode;
    this.classifiedIndicator = params.classifiedIndicator;
    this.patId = params.patId;
    this.memo = params.memo;
    this.reactionDesc = params.reactionDesc;
    this.dictEntry = params.dictEntry;
    this.deleteReason = params.deleteReason;
    this.doctor = params.doctor;
    this.symptom = params.symptom;
    this.doctorId = params.doctorId;
    this.adrNo = params.adrNo;
    this.drugName = params.drugName;
    this.dataSouce = params.dataSouce;
    this.colum = params.colum;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.req.AdrReq',
      $: {
        severity: js_to_java_1.default.String(this.severity),
        drugComp: js_to_java_1.default.String(this.drugComp),
        drugCode: js_to_java_1.default.String(this.drugCode),
        classifiedIndicator: js_to_java_1.default.String(
          this.classifiedIndicator,
        ),
        patId: js_to_java_1.default.String(this.patId),
        memo: js_to_java_1.default.String(this.memo),
        reactionDesc: js_to_java_1.default.String(this.reactionDesc),
        dictEntry: js_to_java_1.default.String(this.dictEntry),
        deleteReason: js_to_java_1.default.String(this.deleteReason),
        doctor: js_to_java_1.default.String(this.doctor),
        symptom: this.symptom
          ? js_to_java_1.default.List(
              (this.symptom || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        doctorId: js_to_java_1.default.String(this.doctorId),
        adrNo: js_to_java_1.default.String(this.adrNo),
        drugName: js_to_java_1.default.String(this.drugName),
        dataSouce: js_to_java_1.default.String(this.dataSouce),
        colum: js_to_java_1.default.String(this.colum),
      },
    };
  }
}
exports.AdrReq = AdrReq;
//generate by interpret-cli dubbo2.js
