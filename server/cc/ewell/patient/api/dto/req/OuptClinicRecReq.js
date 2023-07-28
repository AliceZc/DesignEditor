'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OuptClinicRecReq {
  constructor(params) {
    this.ststus = params.ststus;
    this.visitStatus = params.visitStatus;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.req.OuptClinicRecReq',
      $: {
        ststus: js_to_java_1.default.String(this.ststus),
        visitStatus: js_to_java_1.default.String(this.visitStatus),
      },
    };
  }
}
exports.OuptClinicRecReq = OuptClinicRecReq;
//generate by interpret-cli dubbo2.js
