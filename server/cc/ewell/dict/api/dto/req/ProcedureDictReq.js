'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class ProcedureDictReq {
  constructor(params) {
    this.procedureLevel = params.procedureLevel;
    this.procedureCode = params.procedureCode;
    this.procedureDescription = params.procedureDescription;
    this.procedureName = params.procedureName;
    this.serialNo = params.serialNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.req.ProcedureDictReq',
      $: {
        procedureLevel: js_to_java_1.default.String(this.procedureLevel),
        procedureCode: js_to_java_1.default.String(this.procedureCode),
        procedureDescription: js_to_java_1.default.String(
          this.procedureDescription,
        ),
        procedureName: js_to_java_1.default.String(this.procedureName),
        serialNo: js_to_java_1.default.String(this.serialNo),
      },
    };
  }
}
exports.ProcedureDictReq = ProcedureDictReq;
//generate by interpret-cli dubbo2.js
