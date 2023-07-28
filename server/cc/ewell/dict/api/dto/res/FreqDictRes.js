'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class FreqDictRes {
  constructor(params) {
    this.freqCode = params.freqCode;
    this.freqName = params.freqName;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.res.FreqDictRes',
      $: {
        freqCode: js_to_java_1.default.String(this.freqCode),
        freqName: js_to_java_1.default.String(this.freqName),
      },
    };
  }
}
exports.FreqDictRes = FreqDictRes;
//generate by interpret-cli dubbo2.js
