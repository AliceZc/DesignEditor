'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DrugTreeReq {
  constructor(params) {
    this.searchType = params.searchType;
    this.letterChar = params.letterChar;
    this.ageGroup = params.ageGroup;
    this.ivfFlag = params.ivfFlag;
    this.age = params.age;
    this.usageType = params.usageType;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.DrugTreeReq',
      $: {
        searchType: js_to_java_1.default.String(this.searchType),
        letterChar: js_to_java_1.default.String(this.letterChar),
        ageGroup: js_to_java_1.default.String(this.ageGroup),
        ivfFlag: js_to_java_1.default.String(this.ivfFlag),
        age: js_to_java_1.default.String(this.age),
        usageType: js_to_java_1.default.String(this.usageType),
      },
    };
  }
}
exports.DrugTreeReq = DrugTreeReq;
//generate by interpret-cli dubbo2.js
