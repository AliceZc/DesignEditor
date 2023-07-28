'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class InpClinicRecReq {
  constructor(params) {
    this.visitStatus = params.visitStatus;
    this.doctorId = params.doctorId;
    this.patId = params.patId;
    this.clinicStatus = params.clinicStatus;
    this.adrNo = params.adrNo;
    this.inpNo = params.inpNo;
    this.adminDeptCode = params.adminDeptCode;
    this.selectType = params.selectType;
    this.alterNo = params.alterNo;
    this.wordCode = params.wordCode;
    this.queryType = params.queryType;
    this.allergyNo = params.allergyNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.req.InpClinicRecReq',
      $: {
        visitStatus: js_to_java_1.default.String(this.visitStatus),
        doctorId: js_to_java_1.default.String(this.doctorId),
        patId: js_to_java_1.default.String(this.patId),
        clinicStatus: js_to_java_1.default.String(this.clinicStatus),
        adrNo: this.adrNo
          ? js_to_java_1.default.List(
              (this.adrNo || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        inpNo: js_to_java_1.default.String(this.inpNo),
        adminDeptCode: js_to_java_1.default.String(this.adminDeptCode),
        selectType: js_to_java_1.default.String(this.selectType),
        alterNo: this.alterNo
          ? js_to_java_1.default.List(
              (this.alterNo || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        wordCode: js_to_java_1.default.String(this.wordCode),
        queryType: js_to_java_1.default.String(this.queryType),
        allergyNo: this.allergyNo
          ? js_to_java_1.default.List(
              (this.allergyNo || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
      },
    };
  }
}
exports.InpClinicRecReq = InpClinicRecReq;
//generate by interpret-cli dubbo2.js
