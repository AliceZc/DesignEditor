'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class InspectExamReport {
  constructor(params) {
    this.rptSubjectiveDesc = params.rptSubjectiveDesc;
    this.examNo = params.examNo;
    this.lastUpdateDate = params.lastUpdateDate;
    this.dataType = params.dataType;
    this.recommendation = params.recommendation;
    this.memo = params.memo;
    this.hospitalCode = params.hospitalCode;
    this.examParam = params.examParam;
    this.rptObjectiveDesc = params.rptObjectiveDesc;
    this.rptPath = params.rptPath;
    this.createId = params.createId;
    this.rptObjectName = params.rptObjectName;
    this.examRptNo = params.examRptNo;
    this.normalIndicator = params.normalIndicator;
    this.createDate = params.createDate;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.doc.upon.domain.req.Inspect.InspectExamReport',
      $: {
        rptSubjectiveDesc: js_to_java_1.default.String(this.rptSubjectiveDesc),
        examNo: js_to_java_1.default.String(this.examNo),
        lastUpdateDate: this.lastUpdateDate,
        dataType: js_to_java_1.default.String(this.dataType),
        recommendation: js_to_java_1.default.String(this.recommendation),
        memo: js_to_java_1.default.String(this.memo),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        examParam: js_to_java_1.default.String(this.examParam),
        rptObjectiveDesc: js_to_java_1.default.String(this.rptObjectiveDesc),
        rptPath: js_to_java_1.default.String(this.rptPath),
        createId: js_to_java_1.default.String(this.createId),
        rptObjectName: js_to_java_1.default.String(this.rptObjectName),
        examRptNo: js_to_java_1.default.String(this.examRptNo),
        normalIndicator: js_to_java_1.default.Short(this.normalIndicator),
        createDate: this.createDate,
      },
    };
  }
}
exports.InspectExamReport = InspectExamReport;
//generate by interpret-cli dubbo2.js
