'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class PatientsByOrder {
  constructor(params) {
    this.revNumber = params.revNumber;
    this.ordNumber = params.ordNumber;
    this.vetNumber = params.vetNumber;
    this.inpClinicRecResList = params.inpClinicRecResList;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.PatientsByOrder',
      $: {
        revNumber: js_to_java_1.default.Integer(this.revNumber),
        ordNumber: js_to_java_1.default.Integer(this.ordNumber),
        vetNumber: js_to_java_1.default.Integer(this.vetNumber),
        inpClinicRecResList: this.inpClinicRecResList
          ? js_to_java_1.default.List(
              (this.inpClinicRecResList || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}
exports.PatientsByOrder = PatientsByOrder;
//generate by interpret-cli dubbo2.js
