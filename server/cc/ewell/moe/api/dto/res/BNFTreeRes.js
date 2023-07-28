'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class BNFTreeRes {
  constructor(params) {
    this.dicDesExt = params.dicDesExt;
    this.isParent = params.isParent;
    this.level = params.level;
    this.name = params.name;
    this.contentLevel = params.contentLevel;
    this.pId = params.pId;
    this.id = params.id;
    this.dicDes = params.dicDes;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.BNFTreeRes',
      $: {
        dicDesExt: js_to_java_1.default.String(this.dicDesExt),
        isParent: js_to_java_1.default.String(this.isParent),
        level: js_to_java_1.default.Integer(this.level),
        name: js_to_java_1.default.String(this.name),
        contentLevel: js_to_java_1.default.String(this.contentLevel),
        pId: js_to_java_1.default.String(this.pId),
        id: js_to_java_1.default.String(this.id),
        dicDes: js_to_java_1.default.String(this.dicDes),
      },
    };
  }
}
exports.BNFTreeRes = BNFTreeRes;
//generate by interpret-cli dubbo2.js
