'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class MedicationTypeRes {
  constructor(params) {
    this.medicationTypeCode = params.medicationTypeCode;
    this.medicationTypeDescription = params.medicationTypeDescription;
    this.medicationTypeName = params.medicationTypeName;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.MedicationTypeRes',
      $: {
        medicationTypeCode: js_to_java_1.default.String(
          this.medicationTypeCode,
        ),
        medicationTypeDescription: js_to_java_1.default.String(
          this.medicationTypeDescription,
        ),
        medicationTypeName: js_to_java_1.default.String(
          this.medicationTypeName,
        ),
      },
    };
  }
}
exports.MedicationTypeRes = MedicationTypeRes;
//generate by interpret-cli dubbo2.js
