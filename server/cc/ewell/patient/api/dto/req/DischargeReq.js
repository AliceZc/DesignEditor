'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DischargeReq {
  constructor(params) {
    this.dischargeTime = params.dischargeTime;
    this.avoidOutdoorActivities = params.avoidOutdoorActivities;
    this.patId = params.patId;
    this.dischargeStatus = params.dischargeStatus;
    this.dischargeSummary = params.dischargeSummary;
    this.dischargeContent = params.dischargeContent;
    this.dischargeNo = params.dischargeNo;
    this.doctorName = params.doctorName;
    this.dischargeType = params.dischargeType;
    this.smoker = params.smoker;
    this.doctorId = params.doctorId;
    this.drinkMoreWater = params.drinkMoreWater;
    this.dischargeDestination = params.dischargeDestination;
    this.inpNo = params.inpNo;
    this.moreRest = params.moreRest;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.req.DischargeReq',
      $: {
        dischargeTime: js_to_java_1.default.String(this.dischargeTime),
        avoidOutdoorActivities: js_to_java_1.default.String(
          this.avoidOutdoorActivities,
        ),
        patId: js_to_java_1.default.String(this.patId),
        dischargeStatus: js_to_java_1.default.String(this.dischargeStatus),
        dischargeSummary: js_to_java_1.default.String(this.dischargeSummary),
        dischargeContent: js_to_java_1.default.String(this.dischargeContent),
        dischargeNo: js_to_java_1.default.String(this.dischargeNo),
        doctorName: js_to_java_1.default.String(this.doctorName),
        dischargeType: js_to_java_1.default.String(this.dischargeType),
        smoker: js_to_java_1.default.String(this.smoker),
        doctorId: js_to_java_1.default.String(this.doctorId),
        drinkMoreWater: js_to_java_1.default.String(this.drinkMoreWater),
        dischargeDestination: js_to_java_1.default.String(
          this.dischargeDestination,
        ),
        inpNo: js_to_java_1.default.String(this.inpNo),
        moreRest: js_to_java_1.default.String(this.moreRest),
      },
    };
  }
}
exports.DischargeReq = DischargeReq;
//generate by interpret-cli dubbo2.js
