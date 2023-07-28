'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class AdrRes {
  constructor(params) {
    this.severity = params.severity;
    this.drugCode = params.drugCode;
    this.classifiedIndicator = params.classifiedIndicator;
    this.memo = params.memo;
    this.updateUser = params.updateUser;
    this.updateTime = params.updateTime;
    this.reactionDesc = params.reactionDesc;
    this.doctor = params.doctor;
    this.result = params.result;
    this.opertion = params.opertion;
    this.symptom = params.symptom;
    this.createTime = params.createTime;
    this.adrNo = params.adrNo;
    this.drugName = params.drugName;
    this.createUser = params.createUser;
    this.adrLogNo = params.adrLogNo;
    this.adrDictionary = params.adrDictionary;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.AdrRes',
      $: {
        severity: js_to_java_1.default.String(this.severity),
        drugCode: js_to_java_1.default.String(this.drugCode),
        classifiedIndicator: js_to_java_1.default.String(
          this.classifiedIndicator,
        ),
        memo: js_to_java_1.default.String(this.memo),
        updateUser: js_to_java_1.default.String(this.updateUser),
        updateTime: js_to_java_1.default.String(this.updateTime),
        reactionDesc: js_to_java_1.default.String(this.reactionDesc),
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
        adrNo: js_to_java_1.default.String(this.adrNo),
        drugName: js_to_java_1.default.String(this.drugName),
        createUser: js_to_java_1.default.String(this.createUser),
        adrLogNo: js_to_java_1.default.String(this.adrLogNo),
        adrDictionary: this.adrDictionary
          ? js_to_java_1.default.List(
              (this.adrDictionary || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
      },
    };
  }
}
exports.AdrRes = AdrRes;
//generate by interpret-cli dubbo2.js
