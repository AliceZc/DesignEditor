'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class HisClinicRecReq {
  constructor(params) {
    this.outpNo = params.outpNo;
    this.dateStart = params.dateStart;
    this.patId = params.patId;
    this.inpNo = params.inpNo;
    this.start = params.start;
    this.visitDate = params.visitDate;
    this.end = params.end;
    this.dateEnd = params.dateEnd;
    this.adminssionTime = params.adminssionTime;
    this.type = params.type;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.req.HisClinicRecReq',
      $: {
        outpNo: js_to_java_1.default.String(this.outpNo),
        dateStart: js_to_java_1.default.String(this.dateStart),
        patId: js_to_java_1.default.String(this.patId),
        inpNo: js_to_java_1.default.String(this.inpNo),
        start: this.start,
        visitDate: js_to_java_1.default.String(this.visitDate),
        end: this.end,
        dateEnd: js_to_java_1.default.String(this.dateEnd),
        adminssionTime: js_to_java_1.default.String(this.adminssionTime),
        type: js_to_java_1.default.String(this.type),
      },
    };
  }
}
exports.HisClinicRecReq = HisClinicRecReq;
//generate by interpret-cli dubbo2.js
