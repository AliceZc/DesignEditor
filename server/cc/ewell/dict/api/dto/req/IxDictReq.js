'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class IxDictReq {
  constructor(params) {
    this.itemName = params.itemName;
    this.itemFlag = params.itemFlag;
    this.itemCode = params.itemCode;
    this.itemClass = params.itemClass;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.req.IxDictReq',
      $: {
        itemName: js_to_java_1.default.String(this.itemName),
        itemFlag: js_to_java_1.default.String(this.itemFlag),
        itemCode: js_to_java_1.default.String(this.itemCode),
        itemClass: js_to_java_1.default.String(this.itemClass),
      },
    };
  }
}
exports.IxDictReq = IxDictReq;
//generate by interpret-cli dubbo2.js
