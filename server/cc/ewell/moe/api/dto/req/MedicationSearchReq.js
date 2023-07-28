'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class MedicationSearchReq {
  constructor(params) {
    this.orderStatus = params.orderStatus;
    this.orderGroupNoList = params.orderGroupNoList;
    this.orderDischargeStatus = params.orderDischargeStatus;
    this.orderQueryType = params.orderQueryType;
    this.orderStartTimeMax = params.orderStartTimeMax;
    this.orderNo = params.orderNo;
    this.overDueFlag = params.overDueFlag;
    this.patientId = params.patientId;
    this.freq = params.freq;
    this.visitNos = params.visitNos;
    this.ordSubTypeMap = params.ordSubTypeMap;
    this.orderExeStatus = params.orderExeStatus;
    this.orderDischargeList = params.orderDischargeList;
    this.prn = params.prn;
    this.orderStartTimeMin = params.orderStartTimeMin;
    this.ordStatusMap = params.ordStatusMap;
    this.route = params.route;
    this.visitType = params.visitType;
    this.visitNo = params.visitNo;
    this.orderSubType = params.orderSubType;
    this.titleQueryType = params.titleQueryType;
    this.routeList = params.routeList;
  }
  __fields2java() {
    let ordSubTypeMapMapTransfer = new Map();
    for (let mapKey in this.ordSubTypeMap) {
      ordSubTypeMapMapTransfer.set(
        js_to_java_1.default.String(mapKey),
        js_to_java_1.default.String(this.ordSubTypeMap[mapKey]),
      );
    }
    let ordStatusMapMapTransfer = new Map();
    for (let mapKey in this.ordStatusMap) {
      ordStatusMapMapTransfer.set(
        js_to_java_1.default.String(mapKey),
        js_to_java_1.default.String(this.ordStatusMap[mapKey]),
      );
    }
    return {
      $class: 'cc.ewell.moe.api.dto.req.MedicationSearchReq',
      $: {
        orderStatus: js_to_java_1.default.String(this.orderStatus),
        orderGroupNoList: this.orderGroupNoList
          ? js_to_java_1.default.List(
              (this.orderGroupNoList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        orderDischargeStatus: js_to_java_1.default.String(
          this.orderDischargeStatus,
        ),
        orderQueryType: js_to_java_1.default.String(this.orderQueryType),
        orderStartTimeMax: this.orderStartTimeMax,
        orderNo: this.orderNo
          ? js_to_java_1.default.BigDecimal(this.orderNo.value)
          : null,
        overDueFlag: js_to_java_1.default.String(this.overDueFlag),
        patientId: js_to_java_1.default.String(this.patientId),
        freq: js_to_java_1.default.String(this.freq),
        visitNos: this.visitNos
          ? js_to_java_1.default.List(
              (this.visitNos || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        ordSubTypeMap: js_to_java_1.default.Map(ordSubTypeMapMapTransfer),
        orderExeStatus: js_to_java_1.default.String(this.orderExeStatus),
        orderDischargeList: this.orderDischargeList
          ? js_to_java_1.default.List(
              (this.orderDischargeList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        prn: js_to_java_1.default.String(this.prn),
        orderStartTimeMin: this.orderStartTimeMin,
        ordStatusMap: js_to_java_1.default.Map(ordStatusMapMapTransfer),
        route: js_to_java_1.default.String(this.route),
        visitType: js_to_java_1.default.String(this.visitType),
        visitNo: js_to_java_1.default.String(this.visitNo),
        orderSubType: js_to_java_1.default.String(this.orderSubType),
        titleQueryType: js_to_java_1.default.String(this.titleQueryType),
        routeList: this.routeList
          ? js_to_java_1.default.List(
              (this.routeList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
      },
    };
  }
}
exports.MedicationSearchReq = MedicationSearchReq;
//generate by interpret-cli dubbo2.js
