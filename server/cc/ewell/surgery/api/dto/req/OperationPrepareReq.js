'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OperationPrepareReq {
  constructor(params) {
    this.formType = params.formType;
    this.operationNo = params.operationNo;
    this.proOpBook = params.proOpBook;
    this.formNo = params.formNo;
    this.prepareNo = params.prepareNo;
    this.prepareClass = params.prepareClass;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.surgery.api.dto.req.OperationPrepareReq',
      $: {
        formType: js_to_java_1.default.String(this.formType),
        operationNo: js_to_java_1.default.String(this.operationNo),
        proOpBook: js_to_java_1.default.String(this.proOpBook),
        formNo: js_to_java_1.default.String(this.formNo),
        prepareNo: js_to_java_1.default.String(this.prepareNo),
        prepareClass: js_to_java_1.default.String(this.prepareClass),
      },
    };
  }
}
exports.OperationPrepareReq = OperationPrepareReq;
//generate by interpret-cli dubbo2.js
