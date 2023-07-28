'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class AlertDictReq {
  constructor(params) {
    this.dictEntry = params.dictEntry;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.req.AlertDictReq',
      $: {
        dictEntry: this.dictEntry
          ? js_to_java_1.default.List(
              (this.dictEntry || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
      },
    };
  }
}
exports.AlertDictReq = AlertDictReq;
//generate by interpret-cli dubbo2.js
