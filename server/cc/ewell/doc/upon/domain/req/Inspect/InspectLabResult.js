'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class InspectLabResult {
  constructor(params) {
    this.testResultNo = params.testResultNo;
    this.testItemNo = params.testItemNo;
    this.specimenNo = params.specimenNo;
    this.testNo = params.testNo;
    this.lastUpdateDate = params.lastUpdateDate;
    this.resultDate = params.resultDate;
    this.lowerUnit = params.lowerUnit;
    this.upperUnit = params.upperUnit;
    this.resultUnit = params.resultUnit;
    this.lowerLimit = params.lowerLimit;
    this.hospitalCode = params.hospitalCode;
    this.sortNo = params.sortNo;
    this.result = params.result;
    this.resultItemCode = params.resultItemCode;
    this.resultItemName = params.resultItemName;
    this.crisisStatus = params.crisisStatus;
    this.upperLimit = params.upperLimit;
    this.normalIndicator = params.normalIndicator;
    this.crisisValue = params.crisisValue;
    this.normalResult = params.normalResult;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.doc.upon.domain.req.Inspect.InspectLabResult',
      $: {
        testResultNo: js_to_java_1.default.String(this.testResultNo),
        testItemNo: js_to_java_1.default.String(this.testItemNo),
        specimenNo: js_to_java_1.default.String(this.specimenNo),
        testNo: js_to_java_1.default.String(this.testNo),
        lastUpdateDate: this.lastUpdateDate,
        resultDate: this.resultDate,
        lowerUnit: js_to_java_1.default.String(this.lowerUnit),
        upperUnit: js_to_java_1.default.String(this.upperUnit),
        resultUnit: js_to_java_1.default.String(this.resultUnit),
        lowerLimit: js_to_java_1.default.String(this.lowerLimit),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        sortNo: js_to_java_1.default.Integer(this.sortNo),
        result: js_to_java_1.default.String(this.result),
        resultItemCode: js_to_java_1.default.String(this.resultItemCode),
        resultItemName: js_to_java_1.default.String(this.resultItemName),
        crisisStatus: js_to_java_1.default.String(this.crisisStatus),
        upperLimit: js_to_java_1.default.String(this.upperLimit),
        normalIndicator: js_to_java_1.default.String(this.normalIndicator),
        crisisValue: js_to_java_1.default.String(this.crisisValue),
        normalResult: js_to_java_1.default.String(this.normalResult),
      },
    };
  }
}
exports.InspectLabResult = InspectLabResult;
//generate by interpret-cli dubbo2.js
