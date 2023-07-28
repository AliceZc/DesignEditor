'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OperationRoomDeleteReq {
  constructor(params) {
    this.opRoomId = params.opRoomId;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.surgery.api.dto.req.OperationRoomDeleteReq',
      $: { opRoomId: js_to_java_1.default.String(this.opRoomId) },
    };
  }
}
exports.OperationRoomDeleteReq = OperationRoomDeleteReq;
//generate by interpret-cli dubbo2.js
