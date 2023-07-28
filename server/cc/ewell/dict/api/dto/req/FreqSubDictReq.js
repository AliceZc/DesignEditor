'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class FreqSubDictReq {
  constructor(params) {
    this.freqCode = params.freqCode;
    this.defaultIndicator = params.defaultIndicator;
    this.freqSubCode = params.freqSubCode;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.req.FreqSubDictReq',
      $: {
        freqCode: js_to_java_1.default.String(this.freqCode),
        defaultIndicator: js_to_java_1.default.String(this.defaultIndicator),
        freqSubCode: js_to_java_1.default.String(this.freqSubCode),
      },
    };
  }
}
exports.FreqSubDictReq = FreqSubDictReq;
//generate by interpret-cli dubbo2.js
