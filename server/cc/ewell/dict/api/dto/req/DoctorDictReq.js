'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DoctorDictReq {
  constructor(params) {
    this.doctorName = params.doctorName;
    this.doctorId = params.doctorId;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.req.DoctorDictReq',
      $: {
        doctorName: js_to_java_1.default.String(this.doctorName),
        doctorId: js_to_java_1.default.String(this.doctorId),
      },
    };
  }
}
exports.DoctorDictReq = DoctorDictReq;
//generate by interpret-cli dubbo2.js
