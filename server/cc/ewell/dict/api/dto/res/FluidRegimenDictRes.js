'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class FluidRegimenDictRes {
  constructor(params) {
    this.dosage = params.dosage;
    this.dosageUnit = params.dosageUnit;
    this.solutionDesc = params.solutionDesc;
    this.createUserId = params.createUserId;
    this.drugCode = params.drugCode;
    this.updateUserId = params.updateUserId;
    this.freq = params.freq;
    this.updateUser = params.updateUser;
    this.solutionClassCode = params.solutionClassCode;
    this.updateTime = params.updateTime;
    this.drugForm = params.drugForm;
    this.hospitalCode = params.hospitalCode;
    this.serialNo = params.serialNo;
    this.createTime = params.createTime;
    this.drugName = params.drugName;
    this.commIndicator = params.commIndicator;
    this.createUser = params.createUser;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.res.FluidRegimenDictRes',
      $: {
        dosage: js_to_java_1.default.String(this.dosage),
        dosageUnit: js_to_java_1.default.String(this.dosageUnit),
        solutionDesc: js_to_java_1.default.String(this.solutionDesc),
        createUserId: js_to_java_1.default.String(this.createUserId),
        drugCode: js_to_java_1.default.String(this.drugCode),
        updateUserId: js_to_java_1.default.String(this.updateUserId),
        freq: js_to_java_1.default.String(this.freq),
        updateUser: js_to_java_1.default.String(this.updateUser),
        solutionClassCode: js_to_java_1.default.String(this.solutionClassCode),
        updateTime: js_to_java_1.default.String(this.updateTime),
        drugForm: js_to_java_1.default.String(this.drugForm),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        serialNo: js_to_java_1.default.String(this.serialNo),
        createTime: js_to_java_1.default.String(this.createTime),
        drugName: js_to_java_1.default.String(this.drugName),
        commIndicator: js_to_java_1.default.String(this.commIndicator),
        createUser: js_to_java_1.default.String(this.createUser),
      },
    };
  }
}
exports.FluidRegimenDictRes = FluidRegimenDictRes;
//generate by interpret-cli dubbo2.js
