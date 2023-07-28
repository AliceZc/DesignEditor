'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class InpClinicRecCMSReq {
  constructor(params) {
    this.orderQueryType = params.orderQueryType;
    this.doctorId = params.doctorId;
    this.patId = params.patId;
    this.inpNos = params.inpNos;
    this.adminDeptCode = params.adminDeptCode;
    this.titleQueryType = params.titleQueryType;
    this.wordCode = params.wordCode;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.req.InpClinicRecCMSReq',
      $: {
        orderQueryType: js_to_java_1.default.String(this.orderQueryType),
        doctorId: js_to_java_1.default.String(this.doctorId),
        patId: js_to_java_1.default.String(this.patId),
        inpNos: this.inpNos
          ? js_to_java_1.default.List(
              (this.inpNos || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        adminDeptCode: js_to_java_1.default.String(this.adminDeptCode),
        titleQueryType: js_to_java_1.default.String(this.titleQueryType),
        wordCode: js_to_java_1.default.String(this.wordCode),
      },
    };
  }
}
exports.InpClinicRecCMSReq = InpClinicRecCMSReq;
//generate by interpret-cli dubbo2.js
