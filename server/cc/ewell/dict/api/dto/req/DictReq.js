'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DictReq {
  constructor(params) {
    this.dictEntryList = params.dictEntryList;
    this.subentery = params.subentery;
    this.entryDesc = params.entryDesc;
    this.dictEntry = params.dictEntry;
    this.dictPrompt = params.dictPrompt;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.req.DictReq',
      $: {
        dictEntryList: this.dictEntryList
          ? js_to_java_1.default.List(
              (this.dictEntryList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        subentery: js_to_java_1.default.String(this.subentery),
        entryDesc: js_to_java_1.default.String(this.entryDesc),
        dictEntry: js_to_java_1.default.String(this.dictEntry),
        dictPrompt: js_to_java_1.default.String(this.dictPrompt),
      },
    };
  }
}
exports.DictReq = DictReq;
//generate by interpret-cli dubbo2.js
