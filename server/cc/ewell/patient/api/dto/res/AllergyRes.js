'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class AllergyRes {
  constructor(params) {
    this.drugCode = params.drugCode;
    this.allergyCode = params.allergyCode;
    this.allergyType = params.allergyType;
    this.updateUser = params.updateUser;
    this.updateTime = params.updateTime;
    this.remark = params.remark;
    this.allergyLogNo = params.allergyLogNo;
    this.doctor = params.doctor;
    this.result = params.result;
    this.opertion = params.opertion;
    this.symptom = params.symptom;
    this.createTime = params.createTime;
    this.drugName = params.drugName;
    this.certaintyLevel = params.certaintyLevel;
    this.createUser = params.createUser;
    this.allergyNo = params.allergyNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.AllergyRes',
      $: {
        drugCode: js_to_java_1.default.String(this.drugCode),
        allergyCode: js_to_java_1.default.String(this.allergyCode),
        allergyType: js_to_java_1.default.String(this.allergyType),
        updateUser: js_to_java_1.default.String(this.updateUser),
        updateTime: js_to_java_1.default.String(this.updateTime),
        remark: js_to_java_1.default.String(this.remark),
        allergyLogNo: js_to_java_1.default.String(this.allergyLogNo),
        doctor: js_to_java_1.default.String(this.doctor),
        result: js_to_java_1.default.String(this.result),
        opertion: js_to_java_1.default.String(this.opertion),
        symptom: this.symptom
          ? js_to_java_1.default.List(
              (this.symptom || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        createTime: js_to_java_1.default.String(this.createTime),
        drugName: js_to_java_1.default.String(this.drugName),
        certaintyLevel: js_to_java_1.default.String(this.certaintyLevel),
        createUser: js_to_java_1.default.String(this.createUser),
        allergyNo: js_to_java_1.default.String(this.allergyNo),
      },
    };
  }
}
exports.AllergyRes = AllergyRes;
//generate by interpret-cli dubbo2.js
