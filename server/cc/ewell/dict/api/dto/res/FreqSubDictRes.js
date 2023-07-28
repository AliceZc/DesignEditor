'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class FreqSubDictRes {
  constructor(params) {
    this.freqSubNo = params.freqSubNo;
    this.freqCode = params.freqCode;
    this.freqName = params.freqName;
    this.freqSubDetail = params.freqSubDetail;
    this.hospitalCode = params.hospitalCode;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.res.FreqSubDictRes',
      $: {
        freqSubNo: js_to_java_1.default.String(this.freqSubNo),
        freqCode: js_to_java_1.default.String(this.freqCode),
        freqName: js_to_java_1.default.String(this.freqName),
        freqSubDetail: js_to_java_1.default.String(this.freqSubDetail),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
      },
    };
  }
}
exports.FreqSubDictRes = FreqSubDictRes;
//generate by interpret-cli dubbo2.js
