'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DicRes {
  constructor(params) {
    this.code = params.code;
    this.name = params.name;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.DicRes',
      $: {
        code: js_to_java_1.default.String(this.code),
        name: js_to_java_1.default.String(this.name),
      },
    };
  }
}
exports.DicRes = DicRes;
//generate by interpret-cli dubbo2.js
