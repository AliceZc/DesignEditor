'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OperationCheckReq {
  constructor(params) {
    this.sitMarking = params.sitMarking;
    this.lastDrink = params.lastDrink;
    this.medicationUserFlag = params.medicationUserFlag;
    this.operationCode = params.operationCode;
    this.isAutograph = params.isAutograph;
    this.lastFood = params.lastFood;
    this.allergicHistory = params.allergicHistory;
    this.assessmentTime = params.assessmentTime;
    this.operationNo = params.operationNo;
    this.consentUse = params.consentUse;
    this.medicalHistory = params.medicalHistory;
    this.fastFlag = params.fastFlag;
    this.infectiousPrecaution = params.infectiousPrecaution;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.surgery.api.dto.req.OperationCheckReq',
      $: {
        sitMarking: js_to_java_1.default.String(this.sitMarking),
        lastDrink: js_to_java_1.default.String(this.lastDrink),
        medicationUserFlag: js_to_java_1.default.String(
          this.medicationUserFlag,
        ),
        operationCode: js_to_java_1.default.String(this.operationCode),
        isAutograph: js_to_java_1.default.String(this.isAutograph),
        lastFood: js_to_java_1.default.String(this.lastFood),
        allergicHistory: js_to_java_1.default.String(this.allergicHistory),
        assessmentTime: js_to_java_1.default.String(this.assessmentTime),
        operationNo: js_to_java_1.default.String(this.operationNo),
        consentUse: js_to_java_1.default.String(this.consentUse),
        medicalHistory: js_to_java_1.default.String(this.medicalHistory),
        fastFlag: js_to_java_1.default.String(this.fastFlag),
        infectiousPrecaution: js_to_java_1.default.String(
          this.infectiousPrecaution,
        ),
      },
    };
  }
}
exports.OperationCheckReq = OperationCheckReq;
//generate by interpret-cli dubbo2.js
