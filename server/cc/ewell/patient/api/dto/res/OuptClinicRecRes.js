'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OuptClinicRecRes {
  constructor(params) {
    this.englishName = params.englishName;
    this.ouptNo = params.ouptNo;
    this.cnName = params.cnName;
    this.appointTime = params.appointTime;
    this.patId = params.patId;
    this.sex = params.sex;
    this.checkInTime = params.checkInTime;
    this.age = params.age;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.OuptClinicRecRes',
      $: {
        englishName: js_to_java_1.default.String(this.englishName),
        ouptNo: js_to_java_1.default.String(this.ouptNo),
        cnName: js_to_java_1.default.String(this.cnName),
        appointTime: js_to_java_1.default.String(this.appointTime),
        patId: js_to_java_1.default.String(this.patId),
        sex: js_to_java_1.default.String(this.sex),
        checkInTime: js_to_java_1.default.String(this.checkInTime),
        age: js_to_java_1.default.String(this.age),
      },
    };
  }
}
exports.OuptClinicRecRes = OuptClinicRecRes;
//generate by interpret-cli dubbo2.js
