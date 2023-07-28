'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class TasksReq {
  constructor(params) {
    this.doctorId = params.doctorId;
    this.patIndexNo = params.patIndexNo;
    this.startTime = params.startTime;
    this.endTime = params.endTime;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.basic.api.dto.req.TasksReq',
      $: {
        doctorId: js_to_java_1.default.String(this.doctorId),
        patIndexNo: js_to_java_1.default.String(this.patIndexNo),
        startTime: js_to_java_1.default.String(this.startTime),
        endTime: js_to_java_1.default.String(this.endTime),
      },
    };
  }
}
exports.TasksReq = TasksReq;
//generate by interpret-cli dubbo2.js
