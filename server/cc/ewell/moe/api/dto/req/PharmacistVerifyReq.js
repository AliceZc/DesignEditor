'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class PharmacistVerifyReq {
  constructor(params) {
    this.orderGroup = params.orderGroup;
    this.verifyStatus = params.verifyStatus;
    this.verifyEmpId = params.verifyEmpId;
    this.patId = params.patId;
    this.visitNo = params.visitNo;
    this.visitType = params.visitType;
    this.verifyEmpName = params.verifyEmpName;
    this.verifyInfo = params.verifyInfo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.PharmacistVerifyReq',
      $: {
        orderGroup: this.orderGroup
          ? js_to_java_1.default.BigDecimal(this.orderGroup.value)
          : null,
        verifyStatus: js_to_java_1.default.String(this.verifyStatus),
        verifyEmpId: js_to_java_1.default.String(this.verifyEmpId),
        patId: js_to_java_1.default.String(this.patId),
        visitNo: js_to_java_1.default.String(this.visitNo),
        visitType: js_to_java_1.default.String(this.visitType),
        verifyEmpName: js_to_java_1.default.String(this.verifyEmpName),
        verifyInfo: js_to_java_1.default.String(this.verifyInfo),
      },
    };
  }
}
exports.PharmacistVerifyReq = PharmacistVerifyReq;
//generate by interpret-cli dubbo2.js
