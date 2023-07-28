'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DrugTherapeuticDictRes {
  constructor(params) {
    this.validIndicator = params.validIndicator;
    this.createUserId = params.createUserId;
    this.drugCode = params.drugCode;
    this.therapClassName = params.therapClassName;
    this.updateUserId = params.updateUserId;
    this.createTime = params.createTime;
    this.therapClassCode = params.therapClassCode;
    this.updateUser = params.updateUser;
    this.updateTime = params.updateTime;
    this.createUser = params.createUser;
    this.hospitalCode = params.hospitalCode;
    this.serialNo = params.serialNo;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.res.DrugTherapeuticDictRes',
      $: {
        validIndicator: js_to_java_1.default.String(this.validIndicator),
        createUserId: js_to_java_1.default.String(this.createUserId),
        drugCode: js_to_java_1.default.String(this.drugCode),
        therapClassName: js_to_java_1.default.String(this.therapClassName),
        updateUserId: js_to_java_1.default.String(this.updateUserId),
        createTime: js_to_java_1.default.String(this.createTime),
        therapClassCode: js_to_java_1.default.String(this.therapClassCode),
        updateUser: js_to_java_1.default.String(this.updateUser),
        updateTime: js_to_java_1.default.String(this.updateTime),
        createUser: js_to_java_1.default.String(this.createUser),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        serialNo: js_to_java_1.default.String(this.serialNo),
      },
    };
  }
}
exports.DrugTherapeuticDictRes = DrugTherapeuticDictRes;
//generate by interpret-cli dubbo2.js
