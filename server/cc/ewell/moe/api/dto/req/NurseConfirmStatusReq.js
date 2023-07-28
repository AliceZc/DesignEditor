'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class NurseConfirmStatusReq {
  constructor(params) {
    this.createUserId = params.createUserId;
    this.orderConfirmStatus = params.orderConfirmStatus;
    this.orderConfirmStatusName = params.orderConfirmStatusName;
    this.patId = params.patId;
    this.serialNo = params.serialNo;
    this.confirmUserName = params.confirmUserName;
    this.confirmTime = params.confirmTime;
    this.orderShowStatus = params.orderShowStatus;
    this.visitType = params.visitType;
    this.confirmUserId = params.confirmUserId;
    this.createTime = params.createTime;
    this.visitNo = params.visitNo;
    this.orderGroupNo = params.orderGroupNo;
    this.createUser = params.createUser;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.NurseConfirmStatusReq',
      $: {
        createUserId: js_to_java_1.default.String(this.createUserId),
        orderConfirmStatus: js_to_java_1.default.String(
          this.orderConfirmStatus,
        ),
        orderConfirmStatusName: js_to_java_1.default.String(
          this.orderConfirmStatusName,
        ),
        patId: js_to_java_1.default.String(this.patId),
        serialNo: js_to_java_1.default.String(this.serialNo),
        confirmUserName: js_to_java_1.default.String(this.confirmUserName),
        confirmTime: js_to_java_1.default.String(this.confirmTime),
        orderShowStatus: js_to_java_1.default.String(this.orderShowStatus),
        visitType: js_to_java_1.default.String(this.visitType),
        confirmUserId: js_to_java_1.default.String(this.confirmUserId),
        createTime: js_to_java_1.default.String(this.createTime),
        visitNo: js_to_java_1.default.String(this.visitNo),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        createUser: js_to_java_1.default.String(this.createUser),
      },
    };
  }
}
exports.NurseConfirmStatusReq = NurseConfirmStatusReq;
//generate by interpret-cli dubbo2.js
