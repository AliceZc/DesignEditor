'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class ResultVo {
  constructor(params) {
    this.jsonString = params.jsonString;
    this.error = params.error;
    this.message = params.message;
    this.status = params.status;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.doc.upon.domain.ResultVo',
      $: {
        jsonString: js_to_java_1.default.String(this.jsonString),
        error: js_to_java_1.default.String(this.error),
        message: js_to_java_1.default.String(this.message),
        status: js_to_java_1.default.Integer(this.status),
      },
    };
  }
}
exports.ResultVo = ResultVo;
//generate by interpret-cli dubbo2.js
