'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class Result {
  constructor(params) {
    this.error = params.error;
    this.message = params.message;
    this.status = params.status;
    this.object = params.object;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.common.entity.Result',
      $: {
        error: js_to_java_1.default.String(this.error),
        message: js_to_java_1.default.String(this.message),
        status: js_to_java_1.default.Integer(this.status),
        object: this.object['__fields2java']
          ? this.object['__fields2java']()
          : this.object,
      },
    };
  }
}
exports.Result = Result;
//generate by interpret-cli dubbo2.js
