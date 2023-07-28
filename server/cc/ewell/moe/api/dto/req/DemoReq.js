'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DemoReq {
  constructor(params) {
    this.id = params.id;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.DemoReq',
      $: { id: js_to_java_1.default.String(this.id) },
    };
  }
}
exports.DemoReq = DemoReq;
//generate by interpret-cli dubbo2.js
