'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class FluidRegimenReq {
  constructor(params) {
    this.diluentType = params.diluentType;
    this.searchKey = params.searchKey;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.moe.api.dto.req.FluidRegimenReq',
      $: {
        diluentType: js_to_java_1.default.String(this.diluentType),
        searchKey: js_to_java_1.default.String(this.searchKey),
      },
    };
  }
}
exports.FluidRegimenReq = FluidRegimenReq;
//generate by interpret-cli dubbo2.js
