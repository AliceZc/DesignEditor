'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SplitExePlanRes {
  constructor(params) {
    this.orderGroupNo = params.orderGroupNo;
    this.planDate = params.planDate;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.SplitExePlanRes',
      $: {
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        planDate: js_to_java_1.default.String(this.planDate),
      },
    };
  }
}
exports.SplitExePlanRes = SplitExePlanRes;
//generate by interpret-cli dubbo2.js
