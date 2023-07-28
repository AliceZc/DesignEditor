'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class ActionStatusTypeRes {
  constructor(params) {
    this.actionStatusTypeCode = params.actionStatusTypeCode;
    this.actionStatusTypeName = params.actionStatusTypeName;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.ActionStatusTypeRes',
      $: {
        actionStatusTypeCode: js_to_java_1.default.String(
          this.actionStatusTypeCode,
        ),
        actionStatusTypeName: js_to_java_1.default.String(
          this.actionStatusTypeName,
        ),
      },
    };
  }
}
exports.ActionStatusTypeRes = ActionStatusTypeRes;
//generate by interpret-cli dubbo2.js
