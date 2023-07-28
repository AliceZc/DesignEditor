'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class FluidRegimenDetailRes {
  constructor(params) {
    this.dosage = params.dosage;
    this.dosageUnit = params.dosageUnit;
    this.solutionDesc = params.solutionDesc;
    this.validIndicator = params.validIndicator;
    this.createUserId = params.createUserId;
    this.drugCode = params.drugCode;
    this.updateUserId = params.updateUserId;
    this.freq = params.freq;
    this.updateUser = params.updateUser;
    this.solutionClassCode = params.solutionClassCode;
    this.updateTime = params.updateTime;
    this.drugForm = params.drugForm;
    this.drugFormDesc = params.drugFormDesc;
    this.route = params.route;
    this.createTime = params.createTime;
    this.drugName = params.drugName;
    this.freqDesc = params.freqDesc;
    this.commIndicator = params.commIndicator;
    this.createUser = params.createUser;
    this.validIndicatorDesc = params.validIndicatorDesc;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.FluidRegimenDetailRes',
      $: {
        dosage: js_to_java_1.default.String(this.dosage),
        dosageUnit: js_to_java_1.default.String(this.dosageUnit),
        solutionDesc: js_to_java_1.default.String(this.solutionDesc),
        validIndicator: js_to_java_1.default.String(this.validIndicator),
        createUserId: js_to_java_1.default.String(this.createUserId),
        drugCode: js_to_java_1.default.String(this.drugCode),
        updateUserId: js_to_java_1.default.String(this.updateUserId),
        freq: js_to_java_1.default.String(this.freq),
        updateUser: js_to_java_1.default.String(this.updateUser),
        solutionClassCode: js_to_java_1.default.String(this.solutionClassCode),
        updateTime: js_to_java_1.default.String(this.updateTime),
        drugForm: js_to_java_1.default.String(this.drugForm),
        drugFormDesc: js_to_java_1.default.String(this.drugFormDesc),
        route: js_to_java_1.default.String(this.route),
        createTime: js_to_java_1.default.String(this.createTime),
        drugName: js_to_java_1.default.String(this.drugName),
        freqDesc: js_to_java_1.default.String(this.freqDesc),
        commIndicator: js_to_java_1.default.String(this.commIndicator),
        createUser: js_to_java_1.default.String(this.createUser),
        validIndicatorDesc: js_to_java_1.default.String(
          this.validIndicatorDesc,
        ),
      },
    };
  }
}
exports.FluidRegimenDetailRes = FluidRegimenDetailRes;
//generate by interpret-cli dubbo2.js
