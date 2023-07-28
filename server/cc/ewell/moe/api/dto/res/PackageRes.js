'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class PackageRes {
  constructor(params) {
    this.packageDosage = params.packageDosage;
    this.drugCode = params.drugCode;
    this.packageCode = params.packageCode;
    this.drugName = params.drugName;
    this.actualDosage = params.actualDosage;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.PackageRes',
      $: {
        packageDosage: js_to_java_1.default.String(this.packageDosage),
        drugCode: js_to_java_1.default.String(this.drugCode),
        packageCode: js_to_java_1.default.String(this.packageCode),
        drugName: js_to_java_1.default.String(this.drugName),
        actualDosage: js_to_java_1.default.String(this.actualDosage),
      },
    };
  }
}
exports.PackageRes = PackageRes;
//generate by interpret-cli dubbo2.js
