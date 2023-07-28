'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class MedicationCommitReq {
  constructor(params) {
    this.orderStatus = params.orderStatus;
    this.orderType = params.orderType;
    this.orderDischargeStatus = params.orderDischargeStatus;
    this.createUserId = params.createUserId;
    this.orderNo = params.orderNo;
    this.drugCode = params.drugCode;
    this.patientId = params.patientId;
    this.visitType = params.visitType;
    this.reviewEmpId = params.reviewEmpId;
    this.visitNo = params.visitNo;
    this.orderGroupNo = params.orderGroupNo;
    this.drugName = params.drugName;
    this.reviewEmpName = params.reviewEmpName;
    this.orderSubType = params.orderSubType;
    this.createUser = params.createUser;
    this.orderSubNo = params.orderSubNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.MedicationCommitReq',
      $: {
        orderStatus: js_to_java_1.default.String(this.orderStatus),
        orderType: js_to_java_1.default.String(this.orderType),
        orderDischargeStatus: js_to_java_1.default.String(
          this.orderDischargeStatus,
        ),
        createUserId: js_to_java_1.default.String(this.createUserId),
        orderNo: js_to_java_1.default.String(this.orderNo),
        drugCode: js_to_java_1.default.String(this.drugCode),
        patientId: js_to_java_1.default.String(this.patientId),
        visitType: js_to_java_1.default.String(this.visitType),
        reviewEmpId: js_to_java_1.default.String(this.reviewEmpId),
        visitNo: js_to_java_1.default.String(this.visitNo),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        drugName: js_to_java_1.default.String(this.drugName),
        reviewEmpName: js_to_java_1.default.String(this.reviewEmpName),
        orderSubType: js_to_java_1.default.String(this.orderSubType),
        createUser: js_to_java_1.default.String(this.createUser),
        orderSubNo: js_to_java_1.default.Integer(this.orderSubNo),
      },
    };
  }
}
exports.MedicationCommitReq = MedicationCommitReq;
//generate by interpret-cli dubbo2.js
