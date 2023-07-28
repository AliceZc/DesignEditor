'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OrderExeOpeReq {
  constructor(params) {
    this.orderExeGroupNo = params.orderExeGroupNo;
    this.orderGroupNo = params.orderGroupNo;
    this.createTime = params.createTime;
    this.executePeople = params.executePeople;
    this.checkPeople = params.checkPeople;
    this.remark = params.remark;
    this.orderExeNo = params.orderExeNo;
    this.executePeopleId = params.executePeopleId;
    this.checkPeopleId = params.checkPeopleId;
    this.orderExeSubNo = params.orderExeSubNo;
    this.barCode = params.barCode;
    this.orderExeDealStatus = params.orderExeDealStatus;
    this.executeTime = params.executeTime;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.OrderExeOpeReq',
      $: {
        orderExeGroupNo: js_to_java_1.default.String(this.orderExeGroupNo),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        createTime: js_to_java_1.default.String(this.createTime),
        executePeople: js_to_java_1.default.String(this.executePeople),
        checkPeople: js_to_java_1.default.String(this.checkPeople),
        remark: js_to_java_1.default.String(this.remark),
        orderExeNo: js_to_java_1.default.String(this.orderExeNo),
        executePeopleId: js_to_java_1.default.String(this.executePeopleId),
        checkPeopleId: js_to_java_1.default.String(this.checkPeopleId),
        orderExeSubNo: js_to_java_1.default.String(this.orderExeSubNo),
        barCode: js_to_java_1.default.String(this.barCode),
        orderExeDealStatus: js_to_java_1.default.String(
          this.orderExeDealStatus,
        ),
        executeTime: js_to_java_1.default.String(this.executeTime),
      },
    };
  }
}
exports.OrderExeOpeReq = OrderExeOpeReq;
//generate by interpret-cli dubbo2.js
