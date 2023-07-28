'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class PivasRes {
  constructor(params) {
    this.deptName = params.deptName;
    this.moUnit = params.moUnit;
    this.createdate = params.createdate;
    this.mome = params.mome;
    this.routeDesc = params.routeDesc;
    this.drugSpec = params.drugSpec;
    this.routeName = params.routeName;
    this.actionStatus = params.actionStatus;
    this.reqDoctor = params.reqDoctor;
    this.orderOpenDeptCode = params.orderOpenDeptCode;
    this.wardCode = params.wardCode;
    this.highRisk = params.highRisk;
    this.ordStatus = params.ordStatus;
    this.inpTimes = params.inpTimes;
    this.orderNo = params.orderNo;
    this.barCode = params.barCode;
    this.wardName = params.wardName;
    this.route = params.route;
    this.drugName = params.drugName;
    this.orderDurationUnit = params.orderDurationUnit;
    this.deptCode = params.deptCode;
    this.startDate = params.startDate;
    this.dosage = params.dosage;
    this.drugCode = params.drugCode;
    this.patId = params.patId;
    this.rateAmount = params.rateAmount;
    this.freq = params.freq;
    this.moAmount = params.moAmount;
    this.dischargeOrderFlag = params.dischargeOrderFlag;
    this.packageNo = params.packageNo;
    this.orderDuration = params.orderDuration;
    this.freqName = params.freqName;
    this.routeType = params.routeType;
    this.stopDoctorId = params.stopDoctorId;
    this.orderName = params.orderName;
    this.longOnveFlag = params.longOnveFlag;
    this.orderPlanBeginDate = params.orderPlanBeginDate;
    this.solutionIndicator = params.solutionIndicator;
    this.reqDoctorId = params.reqDoctorId;
    this.orderExeSubNo = params.orderExeSubNo;
    this.orderOpenDeptName = params.orderOpenDeptName;
    this.stopDoctor = params.stopDoctor;
    this.orderExeGroupNo = params.orderExeGroupNo;
    this.planTime = params.planTime;
    this.inpNo = params.inpNo;
    this.orderGroupNo = params.orderGroupNo;
    this.orderCode = params.orderCode;
    this.orderClassCode = params.orderClassCode;
    this.pivasFlag = params.pivasFlag;
    this.stopDate = params.stopDate;
    this.orderPlanEndDate = params.orderPlanEndDate;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.PivasRes',
      $: {
        deptName: js_to_java_1.default.String(this.deptName),
        moUnit: js_to_java_1.default.String(this.moUnit),
        createdate: this.createdate,
        mome: js_to_java_1.default.String(this.mome),
        routeDesc: js_to_java_1.default.String(this.routeDesc),
        drugSpec: js_to_java_1.default.String(this.drugSpec),
        routeName: js_to_java_1.default.String(this.routeName),
        actionStatus: js_to_java_1.default.String(this.actionStatus),
        reqDoctor: js_to_java_1.default.String(this.reqDoctor),
        orderOpenDeptCode: js_to_java_1.default.String(this.orderOpenDeptCode),
        wardCode: js_to_java_1.default.String(this.wardCode),
        highRisk: js_to_java_1.default.String(this.highRisk),
        ordStatus: js_to_java_1.default.String(this.ordStatus),
        inpTimes: js_to_java_1.default.String(this.inpTimes),
        orderNo: js_to_java_1.default.String(this.orderNo),
        barCode: js_to_java_1.default.String(this.barCode),
        wardName: js_to_java_1.default.String(this.wardName),
        route: js_to_java_1.default.String(this.route),
        drugName: js_to_java_1.default.String(this.drugName),
        orderDurationUnit: js_to_java_1.default.String(this.orderDurationUnit),
        deptCode: js_to_java_1.default.String(this.deptCode),
        startDate: this.startDate,
        dosage: js_to_java_1.default.String(this.dosage),
        drugCode: js_to_java_1.default.String(this.drugCode),
        patId: js_to_java_1.default.String(this.patId),
        rateAmount: js_to_java_1.default.String(this.rateAmount),
        freq: js_to_java_1.default.String(this.freq),
        moAmount: js_to_java_1.default.String(this.moAmount),
        dischargeOrderFlag: js_to_java_1.default.String(
          this.dischargeOrderFlag,
        ),
        packageNo: js_to_java_1.default.String(this.packageNo),
        orderDuration: js_to_java_1.default.String(this.orderDuration),
        freqName: js_to_java_1.default.String(this.freqName),
        routeType: js_to_java_1.default.String(this.routeType),
        stopDoctorId: js_to_java_1.default.String(this.stopDoctorId),
        orderName: js_to_java_1.default.String(this.orderName),
        longOnveFlag: js_to_java_1.default.String(this.longOnveFlag),
        orderPlanBeginDate: this.orderPlanBeginDate,
        solutionIndicator: js_to_java_1.default.String(this.solutionIndicator),
        reqDoctorId: js_to_java_1.default.String(this.reqDoctorId),
        orderExeSubNo: js_to_java_1.default.String(this.orderExeSubNo),
        orderOpenDeptName: js_to_java_1.default.String(this.orderOpenDeptName),
        stopDoctor: js_to_java_1.default.String(this.stopDoctor),
        orderExeGroupNo: js_to_java_1.default.String(this.orderExeGroupNo),
        planTime: this.planTime,
        inpNo: js_to_java_1.default.String(this.inpNo),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        orderCode: js_to_java_1.default.String(this.orderCode),
        orderClassCode: js_to_java_1.default.String(this.orderClassCode),
        pivasFlag: js_to_java_1.default.String(this.pivasFlag),
        stopDate: this.stopDate,
        orderPlanEndDate: this.orderPlanEndDate,
      },
    };
  }
}
exports.PivasRes = PivasRes;
//generate by interpret-cli dubbo2.js
