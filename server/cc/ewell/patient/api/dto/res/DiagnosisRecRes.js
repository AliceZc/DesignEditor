'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DiagnosisRecRes {
  constructor(params) {
    this.diagSortNo = params.diagSortNo;
    this.diagIndicator = params.diagIndicator;
    this.patId = params.patId;
    this.diagDesc = params.diagDesc;
    this.diagName = params.diagName;
    this.diagDate = params.diagDate;
    this.diagLevel = params.diagLevel;
    this.diagCode = params.diagCode;
    this.hospitalCode = params.hospitalCode;
    this.doctor = params.doctor;
    this.outpNo = params.outpNo;
    this.patSource = params.patSource;
    this.diagNo = params.diagNo;
    this.doctorId = params.doctorId;
    this.diagStatus = params.diagStatus;
    this.inpNo = params.inpNo;
    this.diagType = params.diagType;
    this.treatResult = params.treatResult;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.DiagnosisRecRes',
      $: {
        diagSortNo: js_to_java_1.default.Short(this.diagSortNo),
        diagIndicator: js_to_java_1.default.String(this.diagIndicator),
        patId: js_to_java_1.default.String(this.patId),
        diagDesc: js_to_java_1.default.String(this.diagDesc),
        diagName: js_to_java_1.default.String(this.diagName),
        diagDate: js_to_java_1.default.String(this.diagDate),
        diagLevel: js_to_java_1.default.String(this.diagLevel),
        diagCode: js_to_java_1.default.String(this.diagCode),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        doctor: js_to_java_1.default.String(this.doctor),
        outpNo: js_to_java_1.default.String(this.outpNo),
        patSource: js_to_java_1.default.String(this.patSource),
        diagNo: js_to_java_1.default.String(this.diagNo),
        doctorId: js_to_java_1.default.String(this.doctorId),
        diagStatus: js_to_java_1.default.String(this.diagStatus),
        inpNo: js_to_java_1.default.String(this.inpNo),
        diagType: this.diagType
          ? js_to_java_1.default.List(
              (this.diagType || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        treatResult: js_to_java_1.default.String(this.treatResult),
      },
    };
  }
}
exports.DiagnosisRecRes = DiagnosisRecRes;
//generate by interpret-cli dubbo2.js
