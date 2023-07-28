'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class PatientMrnRes {
  constructor(params) {
    this.patId = params.patId;
    this.inpNo = params.inpNo;
    this.sex = params.sex;
    this.mrn = params.mrn;
    this.patName = params.patName;
    this.wristBandBarcode = params.wristBandBarcode;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.PatientMrnRes',
      $: {
        patId: js_to_java_1.default.String(this.patId),
        inpNo: js_to_java_1.default.String(this.inpNo),
        sex: js_to_java_1.default.String(this.sex),
        mrn: js_to_java_1.default.String(this.mrn),
        patName: js_to_java_1.default.String(this.patName),
        wristBandBarcode: js_to_java_1.default.String(this.wristBandBarcode),
      },
    };
  }
}
exports.PatientMrnRes = PatientMrnRes;
//generate by interpret-cli dubbo2.js
