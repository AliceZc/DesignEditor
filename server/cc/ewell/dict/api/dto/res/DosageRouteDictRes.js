'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DosageRouteDictRes {
  constructor(params) {
    this.dosage = params.dosage;
    this.createUserId = params.createUserId;
    this.drugCode = params.drugCode;
    this.printDesc = params.printDesc;
    this.dailyFreqDesc = params.dailyFreqDesc;
    this.hospitalCode = params.hospitalCode;
    this.routeName = params.routeName;
    this.specialRegimen = params.specialRegimen;
    this.freqName = params.freqName;
    this.formName = params.formName;
    this.therapyCode = params.therapyCode;
    this.strengthCode = params.strengthCode;
    this.routeCode = params.routeCode;
    this.dosageUnit = params.dosageUnit;
    this.validIndicator = params.validIndicator;
    this.drugSpecName = params.drugSpecName;
    this.formCode = params.formCode;
    this.updateUserId = params.updateUserId;
    this.updateUser = params.updateUser;
    this.therapyType = params.therapyType;
    this.updateTime = params.updateTime;
    this.serialNo = params.serialNo;
    this.freqCode = params.freqCode;
    this.drugSpecCode = params.drugSpecCode;
    this.createTime = params.createTime;
    this.regimenType = params.regimenType;
    this.drugName = params.drugName;
    this.strengthName = params.strengthName;
    this.createUser = params.createUser;
    this.ageAreaIndicator = params.ageAreaIndicator;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.res.DosageRouteDictRes',
      $: {
        dosage: js_to_java_1.default.Long(this.dosage),
        createUserId: js_to_java_1.default.String(this.createUserId),
        drugCode: js_to_java_1.default.String(this.drugCode),
        printDesc: js_to_java_1.default.String(this.printDesc),
        dailyFreqDesc: js_to_java_1.default.String(this.dailyFreqDesc),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        routeName: js_to_java_1.default.String(this.routeName),
        specialRegimen: js_to_java_1.default.String(this.specialRegimen),
        freqName: js_to_java_1.default.String(this.freqName),
        formName: js_to_java_1.default.String(this.formName),
        therapyCode: js_to_java_1.default.String(this.therapyCode),
        strengthCode: js_to_java_1.default.String(this.strengthCode),
        routeCode: js_to_java_1.default.String(this.routeCode),
        dosageUnit: js_to_java_1.default.String(this.dosageUnit),
        validIndicator: js_to_java_1.default.String(this.validIndicator),
        drugSpecName: js_to_java_1.default.String(this.drugSpecName),
        formCode: js_to_java_1.default.String(this.formCode),
        updateUserId: js_to_java_1.default.String(this.updateUserId),
        updateUser: js_to_java_1.default.String(this.updateUser),
        therapyType: js_to_java_1.default.String(this.therapyType),
        updateTime: js_to_java_1.default.String(this.updateTime),
        serialNo: js_to_java_1.default.String(this.serialNo),
        freqCode: js_to_java_1.default.String(this.freqCode),
        drugSpecCode: js_to_java_1.default.String(this.drugSpecCode),
        createTime: js_to_java_1.default.String(this.createTime),
        regimenType: js_to_java_1.default.String(this.regimenType),
        drugName: js_to_java_1.default.String(this.drugName),
        strengthName: js_to_java_1.default.String(this.strengthName),
        createUser: js_to_java_1.default.String(this.createUser),
        ageAreaIndicator: js_to_java_1.default.String(this.ageAreaIndicator),
      },
    };
  }
}
exports.DosageRouteDictRes = DosageRouteDictRes;
//generate by interpret-cli dubbo2.js
