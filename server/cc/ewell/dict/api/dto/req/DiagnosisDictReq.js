'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DiagnosisDictReq {
  constructor(params) {
    this.diagnosisName = params.diagnosisName;
    this.healthLevel = params.healthLevel;
    this.inputCode = params.inputCode;
    this.codeVersion = params.codeVersion;
    this.diagnosisNameIcd = params.diagnosisNameIcd;
    this.approvedIndicator = params.approvedIndicator;
    this.diagnosisCode = params.diagnosisCode;
    this.infectIndicator = params.infectIndicator;
    this.stdIndicator = params.stdIndicator;
    this.serialNo = params.serialNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.req.DiagnosisDictReq',
      $: {
        diagnosisName: js_to_java_1.default.String(this.diagnosisName),
        healthLevel: js_to_java_1.default.String(this.healthLevel),
        inputCode: js_to_java_1.default.String(this.inputCode),
        codeVersion: js_to_java_1.default.String(this.codeVersion),
        diagnosisNameIcd: js_to_java_1.default.String(this.diagnosisNameIcd),
        approvedIndicator: js_to_java_1.default.String(this.approvedIndicator),
        diagnosisCode: js_to_java_1.default.String(this.diagnosisCode),
        infectIndicator: js_to_java_1.default.String(this.infectIndicator),
        stdIndicator: js_to_java_1.default.String(this.stdIndicator),
        serialNo: this.serialNo
          ? js_to_java_1.default.BigDecimal(this.serialNo.value)
          : null,
      },
    };
  }
}
exports.DiagnosisDictReq = DiagnosisDictReq;
//generate by interpret-cli dubbo2.js
