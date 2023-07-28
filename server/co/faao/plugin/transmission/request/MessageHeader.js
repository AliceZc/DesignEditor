'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class MessageHeader {
  constructor(params) {
    this.datatype = params.datatype;
    this.uuheader = params.uuheader;
    this.params = params.params;
    this.i18n = params.i18n;
  }
  __fields2java() {
    return {
      $class: 'co.faao.plugin.transmission.request.MessageHeader',
      $: {
        datatype: js_to_java_1.default.String(this.datatype),
        uuheader: js_to_java_1.default.String(this.uuheader),
        params: js_to_java_1.default.String(this.params),
        i18n: js_to_java_1.default.String(this.i18n),
      },
    };
  }
}
exports.MessageHeader = MessageHeader;
//generate by interpret-cli dubbo2.js
