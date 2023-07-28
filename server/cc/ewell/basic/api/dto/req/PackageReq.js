'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class PackageReq {
  constructor(params) {
    this.visitNo = params.visitNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.basic.api.dto.req.PackageReq',
      $: { visitNo: js_to_java_1.default.String(this.visitNo) },
    };
  }
}
exports.PackageReq = PackageReq;
//generate by interpret-cli dubbo2.js
