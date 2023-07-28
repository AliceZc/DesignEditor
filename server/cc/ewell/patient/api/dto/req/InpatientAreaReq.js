'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class InpatientAreaReq {
  constructor(params) {
    this.wardCode = params.wardCode;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.req.InpatientAreaReq',
      $: { wardCode: js_to_java_1.default.String(this.wardCode) },
    };
  }
}
exports.InpatientAreaReq = InpatientAreaReq;
//generate by interpret-cli dubbo2.js
