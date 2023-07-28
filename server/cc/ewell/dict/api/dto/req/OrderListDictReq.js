'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OrderListDictReq {
  constructor(params) {
    this.orderType = params.orderType;
    this.orderCode = params.orderCode;
    this.orderName = params.orderName;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.req.OrderListDictReq',
      $: {
        orderType: js_to_java_1.default.String(this.orderType),
        orderCode: js_to_java_1.default.String(this.orderCode),
        orderName: js_to_java_1.default.String(this.orderName),
      },
    };
  }
}
exports.OrderListDictReq = OrderListDictReq;
//generate by interpret-cli dubbo2.js
