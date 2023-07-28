'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class PreparationStockRes {
  constructor(params) {
    this.preparationNo = params.preparationNo;
    this.drugCode = params.drugCode;
    this.preparation = params.preparation;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.PreparationStockRes',
      $: {
        preparationNo: js_to_java_1.default.String(this.preparationNo),
        drugCode: js_to_java_1.default.String(this.drugCode),
        preparation: js_to_java_1.default.String(this.preparation),
      },
    };
  }
}
exports.PreparationStockRes = PreparationStockRes;
//generate by interpret-cli dubbo2.js
