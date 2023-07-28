'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class InpatientAreaDictRes {
  constructor(params) {
    this.validIndicator = params.validIndicator;
    this.wardsCode = params.wardsCode;
    this.floor = params.floor;
    this.wards = params.wards;
    this.room = params.room;
    this.hospitalCode = params.hospitalCode;
    this.serialNo = params.serialNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.InpatientAreaDictRes',
      $: {
        validIndicator: js_to_java_1.default.String(this.validIndicator),
        wardsCode: js_to_java_1.default.String(this.wardsCode),
        floor: js_to_java_1.default.String(this.floor),
        wards: js_to_java_1.default.String(this.wards),
        room: js_to_java_1.default.String(this.room),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        serialNo: js_to_java_1.default.Short(this.serialNo),
      },
    };
  }
}
exports.InpatientAreaDictRes = InpatientAreaDictRes;
//generate by interpret-cli dubbo2.js
