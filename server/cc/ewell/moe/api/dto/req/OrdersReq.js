'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OrdersReq {
  constructor(params) {
    this.orderGroupNoList = params.orderGroupNoList;
    this.routeCategoryList = params.routeCategoryList;
    this.orderNo = params.orderNo;
    this.patId = params.patId;
    this.orderStatusList = params.orderStatusList;
    this.orderStatus = params.orderStatus;
    this.visitNoList = params.visitNoList;
    this.patIdList = params.patIdList;
    this.route = params.route;
    this.createTime = params.createTime;
    this.visitNo = params.visitNo;
    this.routeCategory = params.routeCategory;
    this.orderGroupNo = params.orderGroupNo;
    this.orderEndTime = params.orderEndTime;
    this.wardCode = params.wardCode;
    this.orderNoList = params.orderNoList;
    this.routeList = params.routeList;
    this.orderStartTime = params.orderStartTime;
    this.visitType = params.visitType;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.OrdersReq',
      $: {
        orderGroupNoList: this.orderGroupNoList
          ? js_to_java_1.default.List(
              (this.orderGroupNoList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        routeCategoryList: this.routeCategoryList
          ? js_to_java_1.default.List(
              (this.routeCategoryList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        orderNo: js_to_java_1.default.String(this.orderNo),
        patId: js_to_java_1.default.String(this.patId),
        orderStatusList: this.orderStatusList
          ? js_to_java_1.default.List(
              (this.orderStatusList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        orderStatus: js_to_java_1.default.String(this.orderStatus),
        visitNoList: this.visitNoList
          ? js_to_java_1.default.List(
              (this.visitNoList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        patIdList: this.patIdList
          ? js_to_java_1.default.List(
              (this.patIdList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        route: js_to_java_1.default.String(this.route),
        createTime: this.createTime,
        visitNo: js_to_java_1.default.String(this.visitNo),
        routeCategory: js_to_java_1.default.String(this.routeCategory),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        orderEndTime: this.orderEndTime,
        wardCode: js_to_java_1.default.String(this.wardCode),
        orderNoList: this.orderNoList
          ? js_to_java_1.default.List(
              (this.orderNoList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        routeList: this.routeList
          ? js_to_java_1.default.List(
              (this.routeList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        orderStartTime: this.orderStartTime,
        visitType: this.visitType,
      },
    };
  }
}
exports.OrdersReq = OrdersReq;
//generate by interpret-cli dubbo2.js
