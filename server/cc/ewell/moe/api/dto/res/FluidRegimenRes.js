'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class FluidRegimenRes {
  constructor(params) {
    this.drugNameOfClassCodeMap = params.drugNameOfClassCodeMap;
    this.fluidRegimenResListMap = params.fluidRegimenResListMap;
  }
  __fields2java() {
    let drugNameOfClassCodeMapMapTransfer = new Map();
    for (let mapKey in this.drugNameOfClassCodeMap) {
      drugNameOfClassCodeMapMapTransfer.set(
        js_to_java_1.default.String(mapKey),
        js_to_java_1.default.String(this.drugNameOfClassCodeMap[mapKey]),
      );
    }
    let fluidRegimenResListMapMapTransfer = new Map();
    for (let mapKey in this.fluidRegimenResListMap) {
      fluidRegimenResListMapMapTransfer.set(
        js_to_java_1.default.String(mapKey),
        js_to_java_1.default.List(
          this.fluidRegimenResListMap[mapKey].map((paramItem) => {
            return paramItem ? paramItem.__fields2java() : null;
          }),
        ),
      );
    }
    return {
      $class: 'cc.ewell.moe.api.dto.res.FluidRegimenRes',
      $: {
        drugNameOfClassCodeMap: js_to_java_1.default.Map(
          drugNameOfClassCodeMapMapTransfer,
        ),
        fluidRegimenResListMap: js_to_java_1.default.Map(
          fluidRegimenResListMapMapTransfer,
        ),
      },
    };
  }
}
exports.FluidRegimenRes = FluidRegimenRes;
//generate by interpret-cli dubbo2.js
