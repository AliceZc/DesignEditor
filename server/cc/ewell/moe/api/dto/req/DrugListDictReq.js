'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DrugListDictReq {
  constructor(params) {
    this.drugComp = params.drugComp;
    this.drugCode = params.drugCode;
    this.drugName = params.drugName;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.DrugListDictReq',
      $: {
        drugComp: js_to_java_1.default.String(this.drugComp),
        drugCode: js_to_java_1.default.String(this.drugCode),
        drugName: js_to_java_1.default.String(this.drugName),
      },
    };
  }
}
exports.DrugListDictReq = DrugListDictReq;
//generate by interpret-cli dubbo2.js
