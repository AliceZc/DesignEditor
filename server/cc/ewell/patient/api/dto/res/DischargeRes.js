'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DischargeRes {
  constructor(params) {
    this.attendingDoctorId = params.attendingDoctorId;
    this.dischargeDoctorId = params.dischargeDoctorId;
    this.dischargeTime = params.dischargeTime;
    this.avoidOutdoorActivities = params.avoidOutdoorActivities;
    this.patId = params.patId;
    this.dischargeStatus = params.dischargeStatus;
    this.dischargePlan = params.dischargePlan;
    this.dischargeSummary = params.dischargeSummary;
    this.planMesg = params.planMesg;
    this.admissionTime = params.admissionTime;
    this.dischargeNo = params.dischargeNo;
    this.serialNo = params.serialNo;
    this.doctorName = params.doctorName;
    this.dischargeType = params.dischargeType;
    this.attendingDoctor = params.attendingDoctor;
    this.doctorId = params.doctorId;
    this.Smoker = params.Smoker;
    this.drinkMoreWater = params.drinkMoreWater;
    this.dischargeDoctor = params.dischargeDoctor;
    this.dischargeDestination = params.dischargeDestination;
    this.inpNo = params.inpNo;
    this.moreRest = params.moreRest;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.DischargeRes',
      $: {
        attendingDoctorId: js_to_java_1.default.String(this.attendingDoctorId),
        dischargeDoctorId: js_to_java_1.default.String(this.dischargeDoctorId),
        dischargeTime: js_to_java_1.default.String(this.dischargeTime),
        avoidOutdoorActivities: js_to_java_1.default.String(
          this.avoidOutdoorActivities,
        ),
        patId: js_to_java_1.default.String(this.patId),
        dischargeStatus: js_to_java_1.default.String(this.dischargeStatus),
        dischargePlan: js_to_java_1.default.String(this.dischargePlan),
        dischargeSummary: js_to_java_1.default.String(this.dischargeSummary),
        planMesg: js_to_java_1.default.String(this.planMesg),
        admissionTime: js_to_java_1.default.String(this.admissionTime),
        dischargeNo: js_to_java_1.default.String(this.dischargeNo),
        serialNo: js_to_java_1.default.String(this.serialNo),
        doctorName: js_to_java_1.default.String(this.doctorName),
        dischargeType: js_to_java_1.default.String(this.dischargeType),
        attendingDoctor: js_to_java_1.default.String(this.attendingDoctor),
        doctorId: js_to_java_1.default.String(this.doctorId),
        Smoker: js_to_java_1.default.String(this.Smoker),
        drinkMoreWater: js_to_java_1.default.String(this.drinkMoreWater),
        dischargeDoctor: js_to_java_1.default.String(this.dischargeDoctor),
        dischargeDestination: js_to_java_1.default.String(
          this.dischargeDestination,
        ),
        inpNo: js_to_java_1.default.String(this.inpNo),
        moreRest: js_to_java_1.default.String(this.moreRest),
      },
    };
  }
}
exports.DischargeRes = DischargeRes;
//generate by interpret-cli dubbo2.js
