'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OperationRoomSessionListReq {
  constructor(params) {
    this.startTime = params.startTime;
    this.location = params.location;
    this.endTime = params.endTime;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.surgery.api.dto.req.OperationRoomSessionListReq',
      $: {
        startTime: js_to_java_1.default.String(this.startTime),
        location: js_to_java_1.default.String(this.location),
        endTime: js_to_java_1.default.String(this.endTime),
      },
    };
  }
}
exports.OperationRoomSessionListReq = OperationRoomSessionListReq;
//generate by interpret-cli dubbo2.js
