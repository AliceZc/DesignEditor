'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class FreqTypeRes {
  constructor(params) {
    this.FreqTypeCode = params.FreqTypeCode;
    this.FreqTypeDescription = params.FreqTypeDescription;
    this.FreqTypeName = params.FreqTypeName;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.FreqTypeRes',
      $: {
        FreqTypeCode: js_to_java_1.default.String(this.FreqTypeCode),
        FreqTypeDescription: js_to_java_1.default.String(
          this.FreqTypeDescription,
        ),
        FreqTypeName: js_to_java_1.default.String(this.FreqTypeName),
      },
    };
  }
}
exports.FreqTypeRes = FreqTypeRes;
//generate by interpret-cli dubbo2.js
