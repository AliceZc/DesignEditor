'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class NursingReq {
  constructor(params) {
    this.code = params.code;
    this.patId = params.patId;
    this.inpNo = params.inpNo;
    this.inpNos = params.inpNos;
    this.patIds = params.patIds;
    this.status = params.status;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.req.NursingReq',
      $: {
        code: js_to_java_1.default.String(this.code),
        patId: js_to_java_1.default.String(this.patId),
        inpNo: js_to_java_1.default.String(this.inpNo),
        inpNos: this.inpNos
          ? js_to_java_1.default.List(
              (this.inpNos || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        patIds: this.patIds
          ? js_to_java_1.default.List(
              (this.patIds || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        status: js_to_java_1.default.String(this.status),
      },
    };
  }
}
exports.NursingReq = NursingReq;
//generate by interpret-cli dubbo2.js
