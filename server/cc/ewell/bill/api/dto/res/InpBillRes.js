'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class InpBillRes {
  constructor(params) {
    this.amount = params.amount;
    this.itemType = params.itemType;
    this.sumPrice = params.sumPrice;
    this.cost = params.cost;
    this.itemCode = params.itemCode;
    this.itemCost = params.itemCost;
    this.produceTime = params.produceTime;
    this.units = params.units;
    this.openDept = params.openDept;
    this.executeDept = params.executeDept;
    this.produceOtherTime = params.produceOtherTime;
    this.doctor = params.doctor;
    this.result = params.result;
    this.itemName = params.itemName;
    this.inpBillNo = params.inpBillNo;
    this.children = params.children;
    this.price = params.price;
    this.inpBillDetailNo = params.inpBillDetailNo;
    this.isRefund = params.isRefund;
    this.itemClass = params.itemClass;
    this.refundAmount = params.refundAmount;
  }
  __fields2java() {
    let itemCostMapTransfer = new Map();
    for (let mapKey in this.itemCost) {
      itemCostMapTransfer.set(
        js_to_java_1.default.String(mapKey),
        js_to_java_1.default.Integer(this.itemCost[mapKey]),
      );
    }
    return {
      $class: 'cc.ewell.bill.api.dto.res.InpBillRes',
      $: {
        amount: js_to_java_1.default.String(this.amount),
        itemType: js_to_java_1.default.String(this.itemType),
        sumPrice: js_to_java_1.default.Integer(this.sumPrice),
        cost: js_to_java_1.default.Integer(this.cost),
        itemCode: js_to_java_1.default.String(this.itemCode),
        itemCost: js_to_java_1.default.Map(itemCostMapTransfer),
        produceTime: js_to_java_1.default.String(this.produceTime),
        units: js_to_java_1.default.String(this.units),
        openDept: js_to_java_1.default.String(this.openDept),
        executeDept: js_to_java_1.default.String(this.executeDept),
        produceOtherTime: js_to_java_1.default.String(this.produceOtherTime),
        doctor: js_to_java_1.default.String(this.doctor),
        result: js_to_java_1.default.String(this.result),
        itemName: js_to_java_1.default.String(this.itemName),
        inpBillNo: js_to_java_1.default.String(this.inpBillNo),
        children: this.children
          ? js_to_java_1.default.List(
              (this.children || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        price: js_to_java_1.default.String(this.price),
        inpBillDetailNo: js_to_java_1.default.String(this.inpBillDetailNo),
        isRefund: js_to_java_1.default.String(this.isRefund),
        itemClass: js_to_java_1.default.String(this.itemClass),
        refundAmount: js_to_java_1.default.String(this.refundAmount),
      },
    };
  }
}
exports.InpBillRes = InpBillRes;
//generate by interpret-cli dubbo2.js
