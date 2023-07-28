'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class InspectLabMasterVo {
  constructor(params) {
    this.sortNo = params.sortNo;
    this.itemName = params.itemName;
    this.testItemNo = params.testItemNo;
    this.itemCode = params.itemCode;
    this.testId = params.testId;
    this.resultList = params.resultList;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.doc.upon.domain.req.Inspect.InspectLabMasterVo',
      $: {
        sortNo: js_to_java_1.default.Integer(this.sortNo),
        itemName: js_to_java_1.default.String(this.itemName),
        testItemNo: this.testItemNo
          ? js_to_java_1.default.BigDecimal(this.testItemNo.value)
          : null,
        itemCode: js_to_java_1.default.String(this.itemCode),
        testId: js_to_java_1.default.String(this.testId),
        resultList: this.resultList
          ? js_to_java_1.default.List(
              (this.resultList || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}
exports.InspectLabMasterVo = InspectLabMasterVo;
//generate by interpret-cli dubbo2.js
