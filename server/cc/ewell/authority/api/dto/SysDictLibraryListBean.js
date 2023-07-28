'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class SysDictLibraryListBean {
  constructor(params) {
    this.SysDictLibraryListBean = params.SysDictLibraryListBean;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.authority.api.dto.SysDictLibraryListBean',
      $: {
        SysDictLibraryListBean: this.SysDictLibraryListBean
          ? js_to_java_1.default.List(
              (this.SysDictLibraryListBean || []).map((paramItem) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}
exports.SysDictLibraryListBean = SysDictLibraryListBean;
//generate by interpret-cli dubbo2.js
