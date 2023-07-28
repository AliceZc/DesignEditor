'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class HeadInfoReq {
  constructor(params) {
    this.businType = params.businType;
    this.patientId = params.patientId;
    this.visitNo = params.visitNo;
    this.visitType = params.visitType;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.basic.api.dto.req.HeadInfoReq',
      $: {
        businType: js_to_java_1.default.String(this.businType),
        patientId: js_to_java_1.default.String(this.patientId),
        visitNo: js_to_java_1.default.String(this.visitNo),
        visitType: js_to_java_1.default.String(this.visitType),
      },
    };
  }
}
exports.HeadInfoReq = HeadInfoReq;
//generate by interpret-cli dubbo2.js
