'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class EventReq {
  constructor(params) {
    this.date = params.date;
    this.doctorId = params.doctorId;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.basic.api.dto.req.EventReq',
      $: {
        date: js_to_java_1.default.String(this.date),
        doctorId: js_to_java_1.default.String(this.doctorId),
      },
    };
  }
}
exports.EventReq = EventReq;
//generate by interpret-cli dubbo2.js
