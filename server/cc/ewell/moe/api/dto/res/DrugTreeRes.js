'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DrugTreeRes {
  constructor(params) {
    this.dicDesExt = params.dicDesExt;
    this.level = params.level;
    this.name = params.name;
    this.contentLevel = params.contentLevel;
    this.pId = params.pId;
    this.id = params.id;
    this.isLeaf = params.isLeaf;
    this.dicDes = params.dicDes;
    this.bnfName = params.bnfName;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.DrugTreeRes',
      $: {
        dicDesExt: js_to_java_1.default.String(this.dicDesExt),
        level: js_to_java_1.default.Integer(this.level),
        name: js_to_java_1.default.String(this.name),
        contentLevel: js_to_java_1.default.String(this.contentLevel),
        pId: js_to_java_1.default.String(this.pId),
        id: js_to_java_1.default.String(this.id),
        isLeaf: js_to_java_1.default.String(this.isLeaf),
        dicDes: js_to_java_1.default.String(this.dicDes),
        bnfName: js_to_java_1.default.String(this.bnfName),
      },
    };
  }
}
exports.DrugTreeRes = DrugTreeRes;
//generate by interpret-cli dubbo2.js
