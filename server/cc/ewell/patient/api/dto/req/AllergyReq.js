'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class AllergyReq {
  constructor(params) {
    this.severity = params.severity;
    this.drugCode = params.drugCode;
    this.patId = params.patId;
    this.allergyCode = params.allergyCode;
    this.displayName = params.displayName;
    this.abbrviation = params.abbrviation;
    this.allergyType = params.allergyType;
    this.remark = params.remark;
    this.dictEntry = params.dictEntry;
    this.deleteReason = params.deleteReason;
    this.doctor = params.doctor;
    this.tradeName = params.tradeName;
    this.symptom = params.symptom;
    this.doctorId = params.doctorId;
    this.drugName = params.drugName;
    this.certaintyLevel = params.certaintyLevel;
    this.category = params.category;
    this.dataSouce = params.dataSouce;
    this.allergyNo = params.allergyNo;
    this.colum = params.colum;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.req.AllergyReq',
      $: {
        severity: js_to_java_1.default.String(this.severity),
        drugCode: js_to_java_1.default.String(this.drugCode),
        patId: js_to_java_1.default.String(this.patId),
        allergyCode: js_to_java_1.default.String(this.allergyCode),
        displayName: js_to_java_1.default.String(this.displayName),
        abbrviation: js_to_java_1.default.String(this.abbrviation),
        allergyType: js_to_java_1.default.String(this.allergyType),
        remark: js_to_java_1.default.String(this.remark),
        dictEntry: js_to_java_1.default.String(this.dictEntry),
        deleteReason: js_to_java_1.default.String(this.deleteReason),
        doctor: js_to_java_1.default.String(this.doctor),
        tradeName: js_to_java_1.default.String(this.tradeName),
        symptom: this.symptom
          ? js_to_java_1.default.List(
              (this.symptom || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        doctorId: js_to_java_1.default.String(this.doctorId),
        drugName: js_to_java_1.default.String(this.drugName),
        certaintyLevel: js_to_java_1.default.String(this.certaintyLevel),
        category: js_to_java_1.default.String(this.category),
        dataSouce: js_to_java_1.default.String(this.dataSouce),
        allergyNo: js_to_java_1.default.String(this.allergyNo),
        colum: js_to_java_1.default.String(this.colum),
      },
    };
  }
}
exports.AllergyReq = AllergyReq;
//generate by interpret-cli dubbo2.js
