'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class FluidDetailDictRes {
  constructor(params) {
    this.createUserId = params.createUserId;
    this.drugCode = params.drugCode;
    this.updateUserId = params.updateUserId;
    this.updateUser = params.updateUser;
    this.solutionClassCode = params.solutionClassCode;
    this.updateTime = params.updateTime;
    this.itemNo = params.itemNo;
    this.drugSpec = params.drugSpec;
    this.hospitalCode = params.hospitalCode;
    this.serialNo = params.serialNo;
    this.createTime = params.createTime;
    this.drugName = params.drugName;
    this.solutionItemClass = params.solutionItemClass;
    this.createUser = params.createUser;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.res.FluidDetailDictRes',
      $: {
        createUserId: js_to_java_1.default.String(this.createUserId),
        drugCode: js_to_java_1.default.String(this.drugCode),
        updateUserId: js_to_java_1.default.String(this.updateUserId),
        updateUser: js_to_java_1.default.String(this.updateUser),
        solutionClassCode: js_to_java_1.default.String(this.solutionClassCode),
        updateTime: js_to_java_1.default.String(this.updateTime),
        itemNo: js_to_java_1.default.Integer(this.itemNo),
        drugSpec: js_to_java_1.default.String(this.drugSpec),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        serialNo: js_to_java_1.default.String(this.serialNo),
        createTime: js_to_java_1.default.String(this.createTime),
        drugName: js_to_java_1.default.String(this.drugName),
        solutionItemClass: js_to_java_1.default.String(this.solutionItemClass),
        createUser: js_to_java_1.default.String(this.createUser),
      },
    };
  }
}
exports.FluidDetailDictRes = FluidDetailDictRes;
//generate by interpret-cli dubbo2.js
