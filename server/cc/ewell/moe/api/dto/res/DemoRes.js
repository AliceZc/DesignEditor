'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DemoRes {
  constructor(params) {
    this.name = params.name;
    this.id = params.id;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.DemoRes',
      $: {
        name: js_to_java_1.default.String(this.name),
        id: js_to_java_1.default.String(this.id),
      },
    };
  }
}
exports.DemoRes = DemoRes;
//generate by interpret-cli dubbo2.js
