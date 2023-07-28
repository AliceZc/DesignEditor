'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DischargeSummaryRes {
  constructor(params) {
    this.result = params.result;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.DischargeSummaryRes',
      $: { result: js_to_java_1.default.String(this.result) },
    };
  }
}
exports.DischargeSummaryRes = DischargeSummaryRes;
//generate by interpret-cli dubbo2.js
