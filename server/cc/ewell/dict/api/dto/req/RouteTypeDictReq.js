'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class RouteTypeDictReq {
  constructor(params) {
    this.User = params.User;
    this.userId = params.userId;
    this.hospitalCode = params.hospitalCode;
    this.serialNo = params.serialNo;
    this.routeTypeCode = params.routeTypeCode;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.req.RouteTypeDictReq',
      $: {
        User: js_to_java_1.default.String(this.User),
        userId: js_to_java_1.default.String(this.userId),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        serialNo: js_to_java_1.default.String(this.serialNo),
        routeTypeCode: js_to_java_1.default.String(this.routeTypeCode),
      },
    };
  }
}
exports.RouteTypeDictReq = RouteTypeDictReq;
//generate by interpret-cli dubbo2.js
