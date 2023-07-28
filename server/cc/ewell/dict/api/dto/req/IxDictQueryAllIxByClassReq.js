'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class IxDictQueryAllIxByClassReq {
  constructor(params) {
    this.itemClass = params.itemClass;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.req.IxDictQueryAllIxByClassReq',
      $: { itemClass: js_to_java_1.default.String(this.itemClass) },
    };
  }
}
exports.IxDictQueryAllIxByClassReq = IxDictQueryAllIxByClassReq;
//generate by interpret-cli dubbo2.js
