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
    this.createUserId = params.createUserId;
    this.wardsCode = params.wardsCode;
    this.updateUserId = params.updateUserId;
    this.updateUser = params.updateUser;
    this.updateTime = params.updateTime;
    this.wards = params.wards;
    this.room = params.room;
    this.hospitalCode = params.hospitalCode;
    this.serialNo = params.serialNo;
    this.createTime = params.createTime;
    this.createUser = params.createUser;
    this.floor = params.floor;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.res.InpatientAreaDictRes',
      $: {
        validIndicator: js_to_java_1.default.String(this.validIndicator),
        createUserId: js_to_java_1.default.String(this.createUserId),
        wardsCode: js_to_java_1.default.String(this.wardsCode),
        updateUserId: js_to_java_1.default.String(this.updateUserId),
        updateUser: js_to_java_1.default.String(this.updateUser),
        updateTime: js_to_java_1.default.String(this.updateTime),
        wards: js_to_java_1.default.String(this.wards),
        room: js_to_java_1.default.String(this.room),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        serialNo: js_to_java_1.default.String(this.serialNo),
        createTime: js_to_java_1.default.String(this.createTime),
        createUser: js_to_java_1.default.String(this.createUser),
        floor: js_to_java_1.default.String(this.floor),
      },
    };
  }
}
exports.InpatientAreaDictRes = InpatientAreaDictRes;
//generate by interpret-cli dubbo2.js
