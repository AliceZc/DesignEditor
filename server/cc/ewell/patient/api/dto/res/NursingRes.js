'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class NursingRes {
  constructor(params) {
    this.country = params.country;
    this.deptName = params.deptName;
    this.diagnosisRecList = params.diagnosisRecList;
    this.surName = params.surName;
    this.nation = params.nation;
    this.patId = params.patId;
    this.phoneHome = params.phoneHome;
    this.phoneOffice = params.phoneOffice;
    this.ward = params.ward;
    this.adminssionTime = params.adminssionTime;
    this.ageUnit = params.ageUnit;
    this.enName = params.enName;
    this.temperature = params.temperature;
    this.chiefInformation = params.chiefInformation;
    this.wardCode = params.wardCode;
    this.packageName = params.packageName;
    this.dischargeTime = params.dischargeTime;
    this.inpTimes = params.inpTimes;
    this.phoneMobile = params.phoneMobile;
    this.sex = params.sex;
    this.isPackage = params.isPackage;
    this.giveName = params.giveName;
    this.birthDate = params.birthDate;
    this.room = params.room;
    this.wristBandBarcode = params.wristBandBarcode;
    this.planDischargeTime = params.planDischargeTime;
    this.fallRisk = params.fallRisk;
    this.hkicNo = params.hkicNo;
    this.cnName = params.cnName;
    this.visitStatus = params.visitStatus;
    this.bedNo = params.bedNo;
    this.packageCode = params.packageCode;
    this.inpNo = params.inpNo;
    this.age = params.age;
    this.maritalStatus = params.maritalStatus;
    this.deptCode = params.deptCode;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.NursingRes',
      $: {
        country: js_to_java_1.default.String(this.country),
        deptName: js_to_java_1.default.String(this.deptName),
        diagnosisRecList: this.diagnosisRecList
          ? js_to_java_1.default.List(
              (this.diagnosisRecList || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        surName: js_to_java_1.default.String(this.surName),
        nation: js_to_java_1.default.String(this.nation),
        patId: js_to_java_1.default.String(this.patId),
        phoneHome: js_to_java_1.default.String(this.phoneHome),
        phoneOffice: js_to_java_1.default.String(this.phoneOffice),
        ward: js_to_java_1.default.String(this.ward),
        adminssionTime: this.adminssionTime,
        ageUnit: js_to_java_1.default.String(this.ageUnit),
        enName: js_to_java_1.default.String(this.enName),
        temperature: js_to_java_1.default.String(this.temperature),
        chiefInformation: js_to_java_1.default.String(this.chiefInformation),
        wardCode: js_to_java_1.default.String(this.wardCode),
        packageName: js_to_java_1.default.String(this.packageName),
        dischargeTime: this.dischargeTime,
        inpTimes: js_to_java_1.default.String(this.inpTimes),
        phoneMobile: js_to_java_1.default.String(this.phoneMobile),
        sex: js_to_java_1.default.String(this.sex),
        isPackage: js_to_java_1.default.String(this.isPackage),
        giveName: js_to_java_1.default.String(this.giveName),
        birthDate: this.birthDate,
        room: js_to_java_1.default.String(this.room),
        wristBandBarcode: js_to_java_1.default.String(this.wristBandBarcode),
        planDischargeTime: this.planDischargeTime,
        fallRisk: js_to_java_1.default.String(this.fallRisk),
        hkicNo: js_to_java_1.default.String(this.hkicNo),
        cnName: js_to_java_1.default.String(this.cnName),
        visitStatus: js_to_java_1.default.String(this.visitStatus),
        bedNo: js_to_java_1.default.String(this.bedNo),
        packageCode: js_to_java_1.default.String(this.packageCode),
        inpNo: js_to_java_1.default.String(this.inpNo),
        age: js_to_java_1.default.Short(this.age),
        maritalStatus: js_to_java_1.default.String(this.maritalStatus),
        deptCode: js_to_java_1.default.String(this.deptCode),
      },
    };
  }
}
exports.NursingRes = NursingRes;
//generate by interpret-cli dubbo2.js
