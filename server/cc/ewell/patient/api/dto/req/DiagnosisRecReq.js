'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DiagnosisRecReq {
  constructor(params) {
    this.diagSortNo = params.diagSortNo;
    this.endDiagData = params.endDiagData;
    this.diagIndicator = params.diagIndicator;
    this.patId = params.patId;
    this.diagDesc = params.diagDesc;
    this.hisDate = params.hisDate;
    this.startDiagTime = params.startDiagTime;
    this.diagDate = params.diagDate;
    this.diagName = params.diagName;
    this.diagLevel = params.diagLevel;
    this.diagCode = params.diagCode;
    this.endDiagTime = params.endDiagTime;
    this.doctor = params.doctor;
    this.outpNo = params.outpNo;
    this.patSource = params.patSource;
    this.diagNo = params.diagNo;
    this.diagStatus = params.diagStatus;
    this.doctorId = params.doctorId;
    this.inpNo = params.inpNo;
    this.diagType = params.diagType;
    this.treatResult = params.treatResult;
    this.startDiagData = params.startDiagData;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.req.DiagnosisRecReq',
      $: {
        diagSortNo: js_to_java_1.default.Short(this.diagSortNo),
        endDiagData: js_to_java_1.default.String(this.endDiagData),
        diagIndicator: js_to_java_1.default.String(this.diagIndicator),
        patId: js_to_java_1.default.String(this.patId),
        diagDesc: js_to_java_1.default.String(this.diagDesc),
        hisDate: js_to_java_1.default.String(this.hisDate),
        startDiagTime: this.startDiagTime,
        diagDate: js_to_java_1.default.String(this.diagDate),
        diagName: js_to_java_1.default.String(this.diagName),
        diagLevel: js_to_java_1.default.String(this.diagLevel),
        diagCode: js_to_java_1.default.String(this.diagCode),
        endDiagTime: this.endDiagTime,
        doctor: js_to_java_1.default.String(this.doctor),
        outpNo: js_to_java_1.default.String(this.outpNo),
        patSource: js_to_java_1.default.String(this.patSource),
        diagNo: js_to_java_1.default.String(this.diagNo),
        diagStatus: js_to_java_1.default.String(this.diagStatus),
        doctorId: js_to_java_1.default.String(this.doctorId),
        inpNo: js_to_java_1.default.String(this.inpNo),
        diagType: this.diagType
          ? js_to_java_1.default.List(
              (this.diagType || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        treatResult: js_to_java_1.default.String(this.treatResult),
        startDiagData: js_to_java_1.default.String(this.startDiagData),
      },
    };
  }
}
exports.DiagnosisRecReq = DiagnosisRecReq;
//generate by interpret-cli dubbo2.js
