'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class ChiefComplaintRes {
  constructor(params) {
    this.patId = params.patId;
    this.chiefComplaint = params.chiefComplaint;
    this.chiefNo = params.chiefNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.ChiefComplaintRes',
      $: {
        patId: js_to_java_1.default.String(this.patId),
        chiefComplaint: js_to_java_1.default.String(this.chiefComplaint),
        chiefNo: js_to_java_1.default.String(this.chiefNo),
      },
    };
  }
}
exports.ChiefComplaintRes = ChiefComplaintRes;
//generate by interpret-cli dubbo2.js
