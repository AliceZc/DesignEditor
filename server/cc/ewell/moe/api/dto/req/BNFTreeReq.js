'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class BNFTreeReq {
  constructor(params) {
    this.contentLevel = params.contentLevel;
    this.letterChar = params.letterChar;
    this.id = params.id;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.BNFTreeReq',
      $: {
        contentLevel: js_to_java_1.default.String(this.contentLevel),
        letterChar: js_to_java_1.default.String(this.letterChar),
        id: js_to_java_1.default.String(this.id),
      },
    };
  }
}
exports.BNFTreeReq = BNFTreeReq;
//generate by interpret-cli dubbo2.js
