'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class BillProjectDictReq {
  constructor(params) {
    this.itemName = params.itemName;
    this.itemCode = params.itemCode;
    this.orderCode = params.orderCode;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.req.BillProjectDictReq',
      $: {
        itemName: js_to_java_1.default.String(this.itemName),
        itemCode: js_to_java_1.default.String(this.itemCode),
        orderCode: js_to_java_1.default.String(this.orderCode),
      },
    };
  }
}
exports.BillProjectDictReq = BillProjectDictReq;
//generate by interpret-cli dubbo2.js
