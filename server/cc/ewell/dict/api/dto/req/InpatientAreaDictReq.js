'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class InpatientAreaDictReq {
  constructor(params) {
    this.User = params.User;
    this.wardsCode = params.wardsCode;
    this.floor = params.floor;
    this.userId = params.userId;
    this.wards = params.wards;
    this.hospitalCode = params.hospitalCode;
    this.room = params.room;
    this.serialNo = params.serialNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.req.InpatientAreaDictReq',
      $: {
        User: js_to_java_1.default.String(this.User),
        wardsCode: js_to_java_1.default.String(this.wardsCode),
        floor: js_to_java_1.default.String(this.floor),
        userId: js_to_java_1.default.String(this.userId),
        wards: js_to_java_1.default.String(this.wards),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        room: js_to_java_1.default.String(this.room),
        serialNo: js_to_java_1.default.String(this.serialNo),
      },
    };
  }
}
exports.InpatientAreaDictReq = InpatientAreaDictReq;
//generate by interpret-cli dubbo2.js
