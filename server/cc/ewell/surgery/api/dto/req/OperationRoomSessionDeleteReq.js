'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OperationRoomSessionDeleteReq {
  constructor(params) {
    this.sessionId = params.sessionId;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.surgery.api.dto.req.OperationRoomSessionDeleteReq',
      $: { sessionId: js_to_java_1.default.String(this.sessionId) },
    };
  }
}
exports.OperationRoomSessionDeleteReq = OperationRoomSessionDeleteReq;
//generate by interpret-cli dubbo2.js
