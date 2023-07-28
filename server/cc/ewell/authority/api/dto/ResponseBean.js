'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class ResponseBean {
  constructor(params) {
    this.Object = params.Object;
    this.message = params.message;
    this.status = params.status;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.authority.api.dto.ResponseBean',
      $: {
        Object: this.Object['__fields2java']
          ? this.Object['__fields2java']()
          : this.Object,
        message: js_to_java_1.default.String(this.message),
        status: js_to_java_1.default.Integer(this.status),
      },
    };
  }
}
exports.ResponseBean = ResponseBean;
//generate by interpret-cli dubbo2.js
