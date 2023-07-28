'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OperationRoomSessionAddReq {
  constructor(params) {
    this.repeatTillDate = params.repeatTillDate;
    this.turnoverTime = params.turnoverTime;
    this.sessionDate = params.sessionDate;
    this.sessionEndTime = params.sessionEndTime;
    this.sessionStartTime = params.sessionStartTime;
    this.reserveReason = params.reserveReason;
    this.isOpenDeptAll = params.isOpenDeptAll;
    this.sessionType = params.sessionType;
    this.reserveSpecReason = params.reserveSpecReason;
    this.openDept = params.openDept;
    this.opRoomName = params.opRoomName;
    this.isRepeat = params.isRepeat;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.surgery.api.dto.req.OperationRoomSessionAddReq',
      $: {
        repeatTillDate: js_to_java_1.default.String(this.repeatTillDate),
        turnoverTime: js_to_java_1.default.String(this.turnoverTime),
        sessionDate: js_to_java_1.default.String(this.sessionDate),
        sessionEndTime: js_to_java_1.default.String(this.sessionEndTime),
        sessionStartTime: js_to_java_1.default.String(this.sessionStartTime),
        reserveReason: js_to_java_1.default.String(this.reserveReason),
        isOpenDeptAll: js_to_java_1.default.String(this.isOpenDeptAll),
        sessionType: js_to_java_1.default.String(this.sessionType),
        reserveSpecReason: js_to_java_1.default.String(this.reserveSpecReason),
        openDept: js_to_java_1.default.String(this.openDept),
        opRoomName: js_to_java_1.default.String(this.opRoomName),
        isRepeat: js_to_java_1.default.String(this.isRepeat),
      },
    };
  }
}
exports.OperationRoomSessionAddReq = OperationRoomSessionAddReq;
//generate by interpret-cli dubbo2.js
