'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DrugTemplateReq {
  constructor(params) {
    this.templateNo = params.templateNo;
    this.createUserId = params.createUserId;
    this.validIndicator = params.validIndicator;
    this.templateName = params.templateName;
    this.templateLevel = params.templateLevel;
    this.deptCode = params.deptCode;
    this.outpInpIndicator = params.outpInpIndicator;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.DrugTemplateReq',
      $: {
        templateNo: js_to_java_1.default.String(this.templateNo),
        createUserId: js_to_java_1.default.String(this.createUserId),
        validIndicator: js_to_java_1.default.String(this.validIndicator),
        templateName: js_to_java_1.default.String(this.templateName),
        templateLevel: js_to_java_1.default.String(this.templateLevel),
        deptCode: js_to_java_1.default.String(this.deptCode),
        outpInpIndicator: js_to_java_1.default.String(this.outpInpIndicator),
      },
    };
  }
}
exports.DrugTemplateReq = DrugTemplateReq;
//generate by interpret-cli dubbo2.js
