'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OperationRoomSessionUpdateReq {
  constructor(params) {
    this.sessionDate = params.sessionDate;
    this.sessionEndTime = params.sessionEndTime;
    this.sessionStartTime = params.sessionStartTime;
    this.reserveReason = params.reserveReason;
    this.isOpenDeptAll = params.isOpenDeptAll;
    this.sessionId = params.sessionId;
    this.openDept = params.openDept;
    this.opRoomName = params.opRoomName;
    this.repeatTillDate = params.repeatTillDate;
    this.turnoverTime = params.turnoverTime;
    this.sessionType = params.sessionType;
    this.reserveSpecReason = params.reserveSpecReason;
    this.isRepeat = params.isRepeat;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.surgery.api.dto.req.OperationRoomSessionUpdateReq',
      $: {
        sessionDate: js_to_java_1.default.String(this.sessionDate),
        sessionEndTime: js_to_java_1.default.String(this.sessionEndTime),
        sessionStartTime: js_to_java_1.default.String(this.sessionStartTime),
        reserveReason: js_to_java_1.default.String(this.reserveReason),
        isOpenDeptAll: js_to_java_1.default.String(this.isOpenDeptAll),
        sessionId: js_to_java_1.default.String(this.sessionId),
        openDept: js_to_java_1.default.String(this.openDept),
        opRoomName: js_to_java_1.default.String(this.opRoomName),
        repeatTillDate: js_to_java_1.default.String(this.repeatTillDate),
        turnoverTime: js_to_java_1.default.String(this.turnoverTime),
        sessionType: js_to_java_1.default.String(this.sessionType),
        reserveSpecReason: js_to_java_1.default.String(this.reserveSpecReason),
        isRepeat: js_to_java_1.default.String(this.isRepeat),
      },
    };
  }
}
exports.OperationRoomSessionUpdateReq = OperationRoomSessionUpdateReq;
//generate by interpret-cli dubbo2.js
