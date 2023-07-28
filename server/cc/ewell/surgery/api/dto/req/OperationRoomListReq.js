'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OperationRoomListReq {
  constructor(params) {
    this.location = params.location;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.surgery.api.dto.req.OperationRoomListReq',
      $: { location: js_to_java_1.default.String(this.location) },
    };
  }
}
exports.OperationRoomListReq = OperationRoomListReq;
//generate by interpret-cli dubbo2.js
