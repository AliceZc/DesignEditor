'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class FluidDto {
  constructor(params) {
    this.fluidValue = params.fluidValue;
    this.fluidProportion = params.fluidProportion;
    this.fluidName = params.fluidName;
    this.fluidFrequency = params.fluidFrequency;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.res.FluidDto',
      $: {
        fluidValue: js_to_java_1.default.String(this.fluidValue),
        fluidProportion: js_to_java_1.default.String(this.fluidProportion),
        fluidName: js_to_java_1.default.String(this.fluidName),
        fluidFrequency: js_to_java_1.default.String(this.fluidFrequency),
      },
    };
  }
}
exports.FluidDto = FluidDto;
//generate by interpret-cli dubbo2.js
