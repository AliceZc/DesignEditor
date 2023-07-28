'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SummaryModuleReq {
  constructor(params) {
    this.templateType = params.templateType;
    this.rollFlag = params.rollFlag;
    this.templateNo = params.templateNo;
    this.layoutNo = params.layoutNo;
    this.templateName = params.templateName;
    this.maxHeight = params.maxHeight;
    this.moduleNo = params.moduleNo;
    this.positionNo = params.positionNo;
    this.dept = params.dept;
    this.positionSubNo = params.positionSubNo;
    this.height = params.height;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.basic.api.dto.req.SummaryModuleReq',
      $: {
        templateType: js_to_java_1.default.String(this.templateType),
        rollFlag: js_to_java_1.default.String(this.rollFlag),
        templateNo: js_to_java_1.default.String(this.templateNo),
        layoutNo: js_to_java_1.default.String(this.layoutNo),
        templateName: js_to_java_1.default.String(this.templateName),
        maxHeight: js_to_java_1.default.String(this.maxHeight),
        moduleNo: js_to_java_1.default.String(this.moduleNo),
        positionNo: js_to_java_1.default.String(this.positionNo),
        dept: js_to_java_1.default.String(this.dept),
        positionSubNo: js_to_java_1.default.String(this.positionSubNo),
        height: js_to_java_1.default.String(this.height),
      },
    };
  }
}
exports.SummaryModuleReq = SummaryModuleReq;
//generate by interpret-cli dubbo2.js
