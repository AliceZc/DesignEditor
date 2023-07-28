'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OrderTemplateRes {
  constructor(params) {
    this.templateNo = params.templateNo;
    this.templateName = params.templateName;
    this.templateLevelDesc = params.templateLevelDesc;
    this.templateLevel = params.templateLevel;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.OrderTemplateRes',
      $: {
        templateNo: js_to_java_1.default.String(this.templateNo),
        templateName: js_to_java_1.default.String(this.templateName),
        templateLevelDesc: js_to_java_1.default.String(this.templateLevelDesc),
        templateLevel: js_to_java_1.default.String(this.templateLevel),
      },
    };
  }
}
exports.OrderTemplateRes = OrderTemplateRes;
//generate by interpret-cli dubbo2.js
