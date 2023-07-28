'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class MedicationDetailReq {
  constructor(params) {
    this.dosage = params.dosage;
    this.orderNo = params.orderNo;
    this.endDate = params.endDate;
    this.freq = params.freq;
    this.prn = params.prn;
    this.drug = params.drug;
    this.duration = params.duration;
    this.route = params.route;
    this.actionStatus = params.actionStatus;
    this.reviewDate = params.reviewDate;
    this.durationUnit = params.durationUnit;
    this.startDate = params.startDate;
    this.notice = params.notice;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.MedicationDetailReq',
      $: {
        dosage: js_to_java_1.default.String(this.dosage),
        orderNo: js_to_java_1.default.String(this.orderNo),
        endDate: js_to_java_1.default.String(this.endDate),
        freq: js_to_java_1.default.String(this.freq),
        prn: js_to_java_1.default.String(this.prn),
        drug: js_to_java_1.default.String(this.drug),
        duration: js_to_java_1.default.String(this.duration),
        route: js_to_java_1.default.String(this.route),
        actionStatus: js_to_java_1.default.String(this.actionStatus),
        reviewDate: js_to_java_1.default.String(this.reviewDate),
        durationUnit: js_to_java_1.default.String(this.durationUnit),
        startDate: js_to_java_1.default.String(this.startDate),
        notice: js_to_java_1.default.String(this.notice),
      },
    };
  }
}
exports.MedicationDetailReq = MedicationDetailReq;
//generate by interpret-cli dubbo2.js
