'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class InspectExamReportVo {
  constructor(params) {
    this.itemName = params.itemName;
    this.reqDate = params.reqDate;
    this.reqDateString = params.reqDateString;
    this.itemCode = params.itemCode;
    this.examId = params.examId;
    this.report = params.report;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.doc.upon.domain.req.Inspect.InspectExamReportVo',
      $: {
        itemName: js_to_java_1.default.String(this.itemName),
        reqDate: this.reqDate,
        reqDateString: js_to_java_1.default.String(this.reqDateString),
        itemCode: js_to_java_1.default.String(this.itemCode),
        examId: js_to_java_1.default.String(this.examId),
        report: this.report ? this.report.__fields2java() : null,
      },
    };
  }
}
exports.InspectExamReportVo = InspectExamReportVo;
//generate by interpret-cli dubbo2.js
