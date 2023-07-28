'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DrugCategoryDictRes {
  constructor(params) {
    this.validIndicator = params.validIndicator;
    this.createUserId = params.createUserId;
    this.createTime = params.createTime;
    this.updateUserId = params.updateUserId;
    this.updateUser = params.updateUser;
    this.createUser = params.createUser;
    this.updateTime = params.updateTime;
    this.drugCategoryCode = params.drugCategoryCode;
    this.drugCategoryName = params.drugCategoryName;
    this.hospitalCode = params.hospitalCode;
    this.serialNo = params.serialNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.res.DrugCategoryDictRes',
      $: {
        validIndicator: js_to_java_1.default.String(this.validIndicator),
        createUserId: js_to_java_1.default.String(this.createUserId),
        createTime: js_to_java_1.default.String(this.createTime),
        updateUserId: js_to_java_1.default.String(this.updateUserId),
        updateUser: js_to_java_1.default.String(this.updateUser),
        createUser: js_to_java_1.default.String(this.createUser),
        updateTime: js_to_java_1.default.String(this.updateTime),
        drugCategoryCode: js_to_java_1.default.String(this.drugCategoryCode),
        drugCategoryName: js_to_java_1.default.String(this.drugCategoryName),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        serialNo: js_to_java_1.default.String(this.serialNo),
      },
    };
  }
}
exports.DrugCategoryDictRes = DrugCategoryDictRes;
//generate by interpret-cli dubbo2.js
