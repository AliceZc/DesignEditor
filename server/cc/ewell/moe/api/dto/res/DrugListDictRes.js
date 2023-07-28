'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DrugListDictRes {
  constructor(params) {
    this.drugCode = params.drugCode;
    this.drugName = params.drugName;
    this.drugForm = params.drugForm;
    this.drugFormDes = params.drugFormDes;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.DrugListDictRes',
      $: {
        drugCode: js_to_java_1.default.String(this.drugCode),
        drugName: js_to_java_1.default.String(this.drugName),
        drugForm: js_to_java_1.default.String(this.drugForm),
        drugFormDes: js_to_java_1.default.String(this.drugFormDes),
      },
    };
  }
}
exports.DrugListDictRes = DrugListDictRes;
//generate by interpret-cli dubbo2.js
