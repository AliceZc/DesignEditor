'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class BillProjectDictRes {
  constructor(params) {
    this.itemName = params.itemName;
    this.itemCode = params.itemCode;
    this.itemClass = params.itemClass;
    this.itemPrice = params.itemPrice;
    this.units = params.units;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.res.BillProjectDictRes',
      $: {
        itemName: js_to_java_1.default.String(this.itemName),
        itemCode: js_to_java_1.default.String(this.itemCode),
        itemClass: js_to_java_1.default.String(this.itemClass),
        itemPrice: js_to_java_1.default.String(this.itemPrice),
        units: js_to_java_1.default.String(this.units),
      },
    };
  }
}
exports.BillProjectDictRes = BillProjectDictRes;
//generate by interpret-cli dubbo2.js
