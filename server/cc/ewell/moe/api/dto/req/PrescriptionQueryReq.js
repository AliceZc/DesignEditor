'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class PrescriptionQueryReq {
  constructor(params) {
    this.prescriptionNo = params.prescriptionNo;
    this.patId = params.patId;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.PrescriptionQueryReq',
      $: {
        prescriptionNo: js_to_java_1.default.String(this.prescriptionNo),
        patId: js_to_java_1.default.String(this.patId),
      },
    };
  }
}
exports.PrescriptionQueryReq = PrescriptionQueryReq;
//generate by interpret-cli dubbo2.js
