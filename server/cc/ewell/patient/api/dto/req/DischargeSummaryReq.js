'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DischargeSummaryReq {
  constructor(params) {
    this.summary = params.summary;
    this.patId = params.patId;
    this.inpNo = params.inpNo;
    this.planMesg = params.planMesg;
    this.serialNo = params.serialNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.req.DischargeSummaryReq',
      $: {
        summary: js_to_java_1.default.String(this.summary),
        patId: js_to_java_1.default.String(this.patId),
        inpNo: js_to_java_1.default.String(this.inpNo),
        planMesg: js_to_java_1.default.String(this.planMesg),
        serialNo: js_to_java_1.default.String(this.serialNo),
      },
    };
  }
}
exports.DischargeSummaryReq = DischargeSummaryReq;
//generate by interpret-cli dubbo2.js
