'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class HisClinicRecRes {
  constructor(params) {
    this.no = params.no;
    this.orderBy = params.orderBy;
    this.diagnosis = params.diagnosis;
    this.type = params.type;
    this.createDate = params.createDate;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.HisClinicRecRes',
      $: {
        no: js_to_java_1.default.String(this.no),
        orderBy: js_to_java_1.default.String(this.orderBy),
        diagnosis: js_to_java_1.default.String(this.diagnosis),
        type: js_to_java_1.default.String(this.type),
        createDate: js_to_java_1.default.String(this.createDate),
      },
    };
  }
}
exports.HisClinicRecRes = HisClinicRecRes;
//generate by interpret-cli dubbo2.js
