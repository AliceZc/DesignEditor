'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SurgeryRecDeleteReq {
  constructor(params) {
    this.outpNo = params.outpNo;
    this.patSource = params.patSource;
    this.surgeryCode = params.surgeryCode;
    this.surgeryRecNo = params.surgeryRecNo;
    this.patId = params.patId;
    this.inpNo = params.inpNo;
    this.surgeryLevel = params.surgeryLevel;
    this.surgery = params.surgery;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.surgery.api.dto.req.SurgeryRecDeleteReq',
      $: {
        outpNo: js_to_java_1.default.String(this.outpNo),
        patSource: js_to_java_1.default.String(this.patSource),
        surgeryCode: js_to_java_1.default.String(this.surgeryCode),
        surgeryRecNo: js_to_java_1.default.String(this.surgeryRecNo),
        patId: js_to_java_1.default.String(this.patId),
        inpNo: js_to_java_1.default.String(this.inpNo),
        surgeryLevel: js_to_java_1.default.String(this.surgeryLevel),
        surgery: js_to_java_1.default.String(this.surgery),
      },
    };
  }
}
exports.SurgeryRecDeleteReq = SurgeryRecDeleteReq;
//generate by interpret-cli dubbo2.js
