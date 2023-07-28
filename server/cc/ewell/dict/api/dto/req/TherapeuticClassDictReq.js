'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class TherapeuticClassDictReq {
  constructor(params) {
    this.User = params.User;
    this.therapeuticClassCode = params.therapeuticClassCode;
    this.userId = params.userId;
    this.hospitalCode = params.hospitalCode;
    this.serialNo = params.serialNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.req.TherapeuticClassDictReq',
      $: {
        User: js_to_java_1.default.String(this.User),
        therapeuticClassCode: js_to_java_1.default.String(
          this.therapeuticClassCode,
        ),
        userId: js_to_java_1.default.String(this.userId),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        serialNo: js_to_java_1.default.String(this.serialNo),
      },
    };
  }
}
exports.TherapeuticClassDictReq = TherapeuticClassDictReq;
//generate by interpret-cli dubbo2.js
