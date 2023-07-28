'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OrderExeRecSaveReq {
  constructor(params) {
    this.freqAndSubNoMap = params.freqAndSubNoMap;
    this.drugCode = params.drugCode;
    this.patId = params.patId;
    this.insertOrderExeRecList = params.insertOrderExeRecList;
    this.deleteOrderExeRecByGroupList = params.deleteOrderExeRecByGroupList;
    this.orderExeNo = params.orderExeNo;
    this.planDate = params.planDate;
    this.duration = params.duration;
    this.updateAllOrderExeRecMap = params.updateAllOrderExeRecMap;
    this.visitType = params.visitType;
    this.orderExeGroupNo = params.orderExeGroupNo;
    this.creatUserId = params.creatUserId;
    this.planTime = params.planTime;
    this.visitNo = params.visitNo;
    this.creatUser = params.creatUser;
    this.orderGroupNo = params.orderGroupNo;
    this.drugName = params.drugName;
    this.durationUnit = params.durationUnit;
    this.orderSubNo = params.orderSubNo;
    this.orderNo = params.orderNo;
  }
  __fields2java() {
    let freqAndSubNoMapMapTransfer = new Map();
    for (let mapKey in this.freqAndSubNoMap) {
      freqAndSubNoMapMapTransfer.set(
        js_to_java_1.default.String(mapKey),
        js_to_java_1.default.String(this.freqAndSubNoMap[mapKey]),
      );
    }
    let updateAllOrderExeRecMapMapTransfer = new Map();
    for (let mapKey in this.updateAllOrderExeRecMap) {
      updateAllOrderExeRecMapMapTransfer.set(
        js_to_java_1.default.String(mapKey),
        js_to_java_1.default.String(this.updateAllOrderExeRecMap[mapKey]),
      );
    }
    return {
      $class: 'cc.ewell.moe.api.dto.req.OrderExeRecSaveReq',
      $: {
        freqAndSubNoMap: js_to_java_1.default.Map(freqAndSubNoMapMapTransfer),
        drugCode: js_to_java_1.default.String(this.drugCode),
        patId: js_to_java_1.default.String(this.patId),
        insertOrderExeRecList: this.insertOrderExeRecList
          ? js_to_java_1.default.List(
              (this.insertOrderExeRecList || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        deleteOrderExeRecByGroupList: this.deleteOrderExeRecByGroupList
          ? js_to_java_1.default.List(
              (this.deleteOrderExeRecByGroupList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        orderExeNo: js_to_java_1.default.String(this.orderExeNo),
        planDate: js_to_java_1.default.String(this.planDate),
        duration: js_to_java_1.default.String(this.duration),
        updateAllOrderExeRecMap: js_to_java_1.default.Map(
          updateAllOrderExeRecMapMapTransfer,
        ),
        visitType: js_to_java_1.default.String(this.visitType),
        orderExeGroupNo: js_to_java_1.default.String(this.orderExeGroupNo),
        creatUserId: js_to_java_1.default.String(this.creatUserId),
        planTime: js_to_java_1.default.String(this.planTime),
        visitNo: js_to_java_1.default.String(this.visitNo),
        creatUser: js_to_java_1.default.String(this.creatUser),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        drugName: js_to_java_1.default.String(this.drugName),
        durationUnit: js_to_java_1.default.String(this.durationUnit),
        orderSubNo: js_to_java_1.default.String(this.orderSubNo),
        orderNo: js_to_java_1.default.String(this.orderNo),
      },
    };
  }
}
exports.OrderExeRecSaveReq = OrderExeRecSaveReq;
//generate by interpret-cli dubbo2.js
