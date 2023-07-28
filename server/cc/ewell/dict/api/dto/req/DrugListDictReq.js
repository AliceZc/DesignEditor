'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DrugListDictReq {
  constructor(params) {
    this.legalClass = params.legalClass;
    this.prescribleUnit = params.prescribleUnit;
    this.therapeuticClassName = params.therapeuticClassName;
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
    this.drugComp = params.drugComp;
    this.formCode = params.formCode;
    this.solutionIndicator = params.solutionIndicator;
    this.genericIndicator = params.genericIndicator;
    this.strengthCompulsory = params.strengthCompulsory;
    this.userId = params.userId;
    this.vtm = params.vtm;
    this.minDosage = params.minDosage;
    this.serialNo = params.serialNo;
    this.allergeryIndicator = params.allergeryIndicator;
    this.bnfCode = params.bnfCode;
    this.doseForm = params.doseForm;
    this.drugName = params.drugName;
    this.therapeuticClassCode = params.therapeuticClassCode;
    this.strengthName = params.strengthName;
    this.suspendIndicator = params.suspendIndicator;
    this.user = params.user;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.req.DrugListDictReq',
      $: {
        legalClass: js_to_java_1.default.String(this.legalClass),
        prescribleUnit: js_to_java_1.default.String(this.prescribleUnit),
        therapeuticClassName: js_to_java_1.default.String(
          this.therapeuticClassName,
        ),
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
        drugComp: js_to_java_1.default.String(this.drugComp),
        formCode: js_to_java_1.default.String(this.formCode),
        solutionIndicator: js_to_java_1.default.String(this.solutionIndicator),
        genericIndicator: js_to_java_1.default.String(this.genericIndicator),
        strengthCompulsory: js_to_java_1.default.String(
          this.strengthCompulsory,
        ),
        userId: js_to_java_1.default.String(this.userId),
        vtm: js_to_java_1.default.String(this.vtm),
        minDosage: js_to_java_1.default.String(this.minDosage),
        serialNo: js_to_java_1.default.String(this.serialNo),
        allergeryIndicator: js_to_java_1.default.String(
          this.allergeryIndicator,
        ),
        bnfCode: js_to_java_1.default.String(this.bnfCode),
        doseForm: js_to_java_1.default.String(this.doseForm),
        drugName: js_to_java_1.default.String(this.drugName),
        therapeuticClassCode: js_to_java_1.default.String(
          this.therapeuticClassCode,
        ),
        strengthName: js_to_java_1.default.String(this.strengthName),
        suspendIndicator: js_to_java_1.default.String(this.suspendIndicator),
        user: js_to_java_1.default.String(this.user),
      },
    };
  }
}
exports.DrugListDictReq = DrugListDictReq;
//generate by interpret-cli dubbo2.js
