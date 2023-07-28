'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class RouteTypeDictRes {
  constructor(params) {
    this.validIndicator = params.validIndicator;
    this.createUserId = params.createUserId;
    this.createTime = params.createTime;
    this.updateUserId = params.updateUserId;
    this.updateUser = params.updateUser;
    this.routeTypeName = params.routeTypeName;
    this.createUser = params.createUser;
    this.updateTime = params.updateTime;
    this.hospitalCode = params.hospitalCode;
    this.serialNo = params.serialNo;
    this.routeTypeCode = params.routeTypeCode;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.res.RouteTypeDictRes',
      $: {
        validIndicator: js_to_java_1.default.String(this.validIndicator),
        createUserId: js_to_java_1.default.String(this.createUserId),
        createTime: js_to_java_1.default.String(this.createTime),
        updateUserId: js_to_java_1.default.String(this.updateUserId),
        updateUser: js_to_java_1.default.String(this.updateUser),
        routeTypeName: js_to_java_1.default.String(this.routeTypeName),
        createUser: js_to_java_1.default.String(this.createUser),
        updateTime: js_to_java_1.default.String(this.updateTime),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        serialNo: js_to_java_1.default.String(this.serialNo),
        routeTypeCode: js_to_java_1.default.String(this.routeTypeCode),
      },
    };
  }
}
exports.RouteTypeDictRes = RouteTypeDictRes;
//generate by interpret-cli dubbo2.js
