'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class NurseConfirmStatusRes {
  constructor(params) {
    this.createUserId = params.createUserId;
    this.orderConfirmStatus = params.orderConfirmStatus;
    this.statusOrderByGroupNo = params.statusOrderByGroupNo;
    this.patId = params.patId;
    this.nurseConfirmStatusNo = params.nurseConfirmStatusNo;
    this.confirmNurseName = params.confirmNurseName;
    this.confirmTime = params.confirmTime;
    this.orderNurseStatus = params.orderNurseStatus;
    this.outpNo = params.outpNo;
    this.confirmNurseId = params.confirmNurseId;
    this.patSource = params.patSource;
    this.createTime = params.createTime;
    this.inpNo = params.inpNo;
    this.orderGroupNo = params.orderGroupNo;
    this.createUser = params.createUser;
    this.orderNurseStatusName = params.orderNurseStatusName;
  }
  __fields2java() {
    let statusOrderByGroupNoMapTransfer = new Map();
    for (let mapKey in this.statusOrderByGroupNo) {
      statusOrderByGroupNoMapTransfer.set(
        js_to_java_1.default.String(mapKey),
        js_to_java_1.default.String(this.statusOrderByGroupNo[mapKey]),
      );
    }
    return {
      $class: 'cc.ewell.moe.api.dto.res.NurseConfirmStatusRes',
      $: {
        createUserId: js_to_java_1.default.String(this.createUserId),
        orderConfirmStatus: js_to_java_1.default.String(
          this.orderConfirmStatus,
        ),
        statusOrderByGroupNo: js_to_java_1.default.Map(
          statusOrderByGroupNoMapTransfer,
        ),
        patId: js_to_java_1.default.String(this.patId),
        nurseConfirmStatusNo: js_to_java_1.default.String(
          this.nurseConfirmStatusNo,
        ),
        confirmNurseName: js_to_java_1.default.String(this.confirmNurseName),
        confirmTime: js_to_java_1.default.String(this.confirmTime),
        orderNurseStatus: js_to_java_1.default.String(this.orderNurseStatus),
        outpNo: js_to_java_1.default.String(this.outpNo),
        confirmNurseId: js_to_java_1.default.String(this.confirmNurseId),
        patSource: js_to_java_1.default.String(this.patSource),
        createTime: js_to_java_1.default.String(this.createTime),
        inpNo: js_to_java_1.default.String(this.inpNo),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        createUser: js_to_java_1.default.String(this.createUser),
        orderNurseStatusName: js_to_java_1.default.String(
          this.orderNurseStatusName,
        ),
      },
    };
  }
}
exports.NurseConfirmStatusRes = NurseConfirmStatusRes;
//generate by interpret-cli dubbo2.js
