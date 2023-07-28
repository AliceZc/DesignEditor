'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OrdersRes {
  constructor(params) {
    this.deptName = params.deptName;
    this.moUnit = params.moUnit;
    this.drugCode = params.drugCode;
    this.patId = params.patId;
    this.rateAmount = params.rateAmount;
    this.freq = params.freq;
    this.moAmount = params.moAmount;
    this.createdate = params.createdate;
    this.mome = params.mome;
    this.routeDesc = params.routeDesc;
    this.drugSpec = params.drugSpec;
    this.dischargeOrderFlag = params.dischargeOrderFlag;
    this.routeName = params.routeName;
    this.orderDuration = params.orderDuration;
    this.actionStatus = params.actionStatus;
    this.freqName = params.freqName;
    this.reqDoctor = params.reqDoctor;
    this.orderOpenDeptCode = params.orderOpenDeptCode;
    this.wardCode = params.wardCode;
    this.routeType = params.routeType;
    this.highRisk = params.highRisk;
    this.stopDoctorId = params.stopDoctorId;
    this.orderName = params.orderName;
    this.longOnveFlag = params.longOnveFlag;
    this.ordStatus = params.ordStatus;
    this.inpTimes = params.inpTimes;
    this.orderNo = params.orderNo;
    this.orderPlanBeginDate = params.orderPlanBeginDate;
    this.solutionIndicator = params.solutionIndicator;
    this.reqDoctorId = params.reqDoctorId;
    this.orderOpenDeptName = params.orderOpenDeptName;
    this.wardName = params.wardName;
    this.stopDoctor = params.stopDoctor;
    this.route = params.route;
    this.inpNo = params.inpNo;
    this.orderGroupNo = params.orderGroupNo;
    this.drugName = params.drugName;
    this.orderCode = params.orderCode;
    this.orderClassCode = params.orderClassCode;
    this.orderDurationUnit = params.orderDurationUnit;
    this.pivasFlag = params.pivasFlag;
    this.deptCode = params.deptCode;
    this.startDate = params.startDate;
    this.stopDate = params.stopDate;
    this.orderPlanEndDate = params.orderPlanEndDate;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.OrdersRes',
      $: {
        deptName: js_to_java_1.default.String(this.deptName),
        moUnit: js_to_java_1.default.String(this.moUnit),
        drugCode: js_to_java_1.default.String(this.drugCode),
        patId: js_to_java_1.default.String(this.patId),
        rateAmount: js_to_java_1.default.String(this.rateAmount),
        freq: js_to_java_1.default.String(this.freq),
        moAmount: js_to_java_1.default.String(this.moAmount),
        createdate: this.createdate,
        mome: js_to_java_1.default.String(this.mome),
        routeDesc: js_to_java_1.default.String(this.routeDesc),
        drugSpec: js_to_java_1.default.String(this.drugSpec),
        dischargeOrderFlag: js_to_java_1.default.String(
          this.dischargeOrderFlag,
        ),
        routeName: js_to_java_1.default.String(this.routeName),
        orderDuration: js_to_java_1.default.String(this.orderDuration),
        actionStatus: js_to_java_1.default.String(this.actionStatus),
        freqName: js_to_java_1.default.String(this.freqName),
        reqDoctor: js_to_java_1.default.String(this.reqDoctor),
        orderOpenDeptCode: js_to_java_1.default.String(this.orderOpenDeptCode),
        wardCode: js_to_java_1.default.String(this.wardCode),
        routeType: js_to_java_1.default.String(this.routeType),
        highRisk: js_to_java_1.default.String(this.highRisk),
        stopDoctorId: js_to_java_1.default.String(this.stopDoctorId),
        orderName: js_to_java_1.default.String(this.orderName),
        longOnveFlag: js_to_java_1.default.String(this.longOnveFlag),
        ordStatus: js_to_java_1.default.String(this.ordStatus),
        inpTimes: js_to_java_1.default.String(this.inpTimes),
        orderNo: js_to_java_1.default.String(this.orderNo),
        orderPlanBeginDate: this.orderPlanBeginDate,
        solutionIndicator: js_to_java_1.default.String(this.solutionIndicator),
        reqDoctorId: js_to_java_1.default.String(this.reqDoctorId),
        orderOpenDeptName: js_to_java_1.default.String(this.orderOpenDeptName),
        wardName: js_to_java_1.default.String(this.wardName),
        stopDoctor: js_to_java_1.default.String(this.stopDoctor),
        route: js_to_java_1.default.String(this.route),
        inpNo: js_to_java_1.default.String(this.inpNo),
        orderGroupNo: js_to_java_1.default.String(this.orderGroupNo),
        drugName: js_to_java_1.default.String(this.drugName),
        orderCode: js_to_java_1.default.String(this.orderCode),
        orderClassCode: js_to_java_1.default.String(this.orderClassCode),
        orderDurationUnit: js_to_java_1.default.String(this.orderDurationUnit),
        pivasFlag: js_to_java_1.default.String(this.pivasFlag),
        deptCode: js_to_java_1.default.String(this.deptCode),
        startDate: this.startDate,
        stopDate: this.stopDate,
        orderPlanEndDate: this.orderPlanEndDate,
      },
    };
  }
}
exports.OrdersRes = OrdersRes;
//generate by interpret-cli dubbo2.js
