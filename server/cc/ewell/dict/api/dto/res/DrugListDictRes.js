'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DrugListDictRes {
  constructor(params) {
    this.legalClass = params.legalClass;
    this.prescribleUnit = params.prescribleUnit;
    this.therapeuticClassName = params.therapeuticClassName;
    this.createUserId = params.createUserId;
    this.drugCode = params.drugCode;
    this.maxDosage = params.maxDosage;
    this.hospitalCode = params.hospitalCode;
    this.agegroup = params.agegroup;
    this.manufacturer = params.manufacturer;
    this.routeName = params.routeName;
    this.baseUnit = params.baseUnit;
    this.tradeName = params.tradeName;
    this.specifyQuantityIndicator = params.specifyQuantityIndicator;
    this.outOfStockIndicator = params.outOfStockIndicator;
    this.price = params.price;
    this.formName = params.formName;
    this.dispenseUnit = params.dispenseUnit;
    this.rank = params.rank;
    this.bnfName = params.bnfName;
    this.strengthCode = params.strengthCode;
    this.routeCode = params.routeCode;
    this.updateUserId = params.updateUserId;
    this.formCode = params.formCode;
    this.solutionIndicator = params.solutionIndicator;
    this.genericIndicator = params.genericIndicator;
    this.updateUser = params.updateUser;
    this.strengthCompulsory = params.strengthCompulsory;
    this.updateTime = params.updateTime;
    this.drugForm = params.drugForm;
    this.vtm = params.vtm;
    this.minDosage = params.minDosage;
    this.serialNo = params.serialNo;
    this.drugFormDes = params.drugFormDes;
    this.allergeryIndicator = params.allergeryIndicator;
    this.bnfCode = params.bnfCode;
    this.createTime = params.createTime;
    this.doseForm = params.doseForm;
    this.drugName = params.drugName;
    this.therapeuticClassCode = params.therapeuticClassCode;
    this.createUser = params.createUser;
    this.strengthName = params.strengthName;
    this.suspendIndicator = params.suspendIndicator;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.res.DrugListDictRes',
      $: {
        legalClass: js_to_java_1.default.String(this.legalClass),
        prescribleUnit: js_to_java_1.default.String(this.prescribleUnit),
        therapeuticClassName: js_to_java_1.default.String(
          this.therapeuticClassName,
        ),
        createUserId: js_to_java_1.default.String(this.createUserId),
        drugCode: js_to_java_1.default.String(this.drugCode),
        maxDosage: js_to_java_1.default.String(this.maxDosage),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        agegroup: js_to_java_1.default.String(this.agegroup),
        manufacturer: js_to_java_1.default.String(this.manufacturer),
        routeName: js_to_java_1.default.String(this.routeName),
        baseUnit: js_to_java_1.default.String(this.baseUnit),
        tradeName: js_to_java_1.default.String(this.tradeName),
        specifyQuantityIndicator: js_to_java_1.default.String(
          this.specifyQuantityIndicator,
        ),
        outOfStockIndicator: js_to_java_1.default.String(
          this.outOfStockIndicator,
        ),
        price: js_to_java_1.default.String(this.price),
        formName: js_to_java_1.default.String(this.formName),
        dispenseUnit: js_to_java_1.default.String(this.dispenseUnit),
        rank: js_to_java_1.default.String(this.rank),
        bnfName: js_to_java_1.default.String(this.bnfName),
        strengthCode: js_to_java_1.default.String(this.strengthCode),
        routeCode: js_to_java_1.default.String(this.routeCode),
        updateUserId: js_to_java_1.default.String(this.updateUserId),
        formCode: js_to_java_1.default.String(this.formCode),
        solutionIndicator: js_to_java_1.default.String(this.solutionIndicator),
        genericIndicator: js_to_java_1.default.String(this.genericIndicator),
        updateUser: js_to_java_1.default.String(this.updateUser),
        strengthCompulsory: js_to_java_1.default.String(
          this.strengthCompulsory,
        ),
        updateTime: js_to_java_1.default.String(this.updateTime),
        drugForm: js_to_java_1.default.String(this.drugForm),
        vtm: js_to_java_1.default.String(this.vtm),
        minDosage: js_to_java_1.default.String(this.minDosage),
        serialNo: js_to_java_1.default.String(this.serialNo),
        drugFormDes: js_to_java_1.default.String(this.drugFormDes),
        allergeryIndicator: js_to_java_1.default.String(
          this.allergeryIndicator,
        ),
        bnfCode: js_to_java_1.default.String(this.bnfCode),
        createTime: js_to_java_1.default.String(this.createTime),
        doseForm: js_to_java_1.default.String(this.doseForm),
        drugName: js_to_java_1.default.String(this.drugName),
        therapeuticClassCode: js_to_java_1.default.String(
          this.therapeuticClassCode,
        ),
        createUser: js_to_java_1.default.String(this.createUser),
        strengthName: js_to_java_1.default.String(this.strengthName),
        suspendIndicator: js_to_java_1.default.String(this.suspendIndicator),
      },
    };
  }
}
exports.DrugListDictRes = DrugListDictRes;
//generate by interpret-cli dubbo2.js
