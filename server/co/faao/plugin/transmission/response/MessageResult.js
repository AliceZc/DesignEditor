'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class MessageResult {
  constructor(params) {
    this.error = params.error;
    this.message = params.message;
    this.object = params.object;
    this.status = params.status;
  }
  __fields2java() {
    return {
      $class: 'co.faao.plugin.transmission.response.MessageResult',
      $: {
        error: js_to_java_1.default.String(this.error),
        message: js_to_java_1.default.String(this.message),
        object: this.object['__fields2java']
          ? this.object['__fields2java']()
          : this.object,
        status: js_to_java_1.default.Integer(this.status),
      },
    };
  }
}
exports.MessageResult = MessageResult;
//generate by interpret-cli dubbo2.js
