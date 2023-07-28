'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DoctorDictRes {
  constructor(params) {
    this.doctorId = params.doctorId;
    this.name = params.name;
    this.userName = params.userName;
    this.deptCode = params.deptCode;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.res.DoctorDictRes',
      $: {
        doctorId: js_to_java_1.default.String(this.doctorId),
        name: js_to_java_1.default.String(this.name),
        userName: js_to_java_1.default.String(this.userName),
        deptCode: js_to_java_1.default.String(this.deptCode),
      },
    };
  }
}
exports.DoctorDictRes = DoctorDictRes;
//generate by interpret-cli dubbo2.js
