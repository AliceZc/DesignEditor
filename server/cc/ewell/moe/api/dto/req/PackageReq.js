'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class PackageReq {
  constructor(params) {
    this.drugCode = params.drugCode;
    this.patId = params.patId;
    this.packageCode = params.packageCode;
    this.inpNo = params.inpNo;
    this.drugName = params.drugName;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.PackageReq',
      $: {
        drugCode: js_to_java_1.default.String(this.drugCode),
        patId: js_to_java_1.default.String(this.patId),
        packageCode: js_to_java_1.default.String(this.packageCode),
        inpNo: js_to_java_1.default.String(this.inpNo),
        drugName: js_to_java_1.default.String(this.drugName),
      },
    };
  }
}
exports.PackageReq = PackageReq;
//generate by interpret-cli dubbo2.js
