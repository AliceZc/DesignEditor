'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OutpClinicRecResult {
  constructor(params) {
    this.ordNumber = params.ordNumber;
    this.vetNumber = params.vetNumber;
    this.outpClinicRecRess = params.outpClinicRecRess;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.OutpClinicRecResult',
      $: {
        ordNumber: js_to_java_1.default.Integer(this.ordNumber),
        vetNumber: js_to_java_1.default.Integer(this.vetNumber),
        outpClinicRecRess: this.outpClinicRecRess
          ? js_to_java_1.default.List(
              (this.outpClinicRecRess || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}
exports.OutpClinicRecResult = OutpClinicRecResult;
//generate by interpret-cli dubbo2.js
