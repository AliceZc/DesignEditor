'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class HisMedicationReq {
  constructor(params) {
    this.no = params.no;
    this.orderSubType = params.orderSubType;
    this.type = params.type;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.HisMedicationReq',
      $: {
        no: js_to_java_1.default.String(this.no),
        orderSubType: js_to_java_1.default.String(this.orderSubType),
        type: js_to_java_1.default.String(this.type),
      },
    };
  }
}
exports.HisMedicationReq = HisMedicationReq;
//generate by interpret-cli dubbo2.js
