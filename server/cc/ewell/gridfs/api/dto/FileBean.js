'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class FileBean {
  constructor(params) {
    this.fileName = params.fileName;
    this.metadata = params.metadata;
    this.originalFileId = params.originalFileId;
    this.appName = params.appName;
    this.inputStream = params.inputStream;
    this.tagName = params.tagName;
    this.contentType = params.contentType;
    this.fileId = params.fileId;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.gridfs.api.dto.FileBean',
      $: {
        fileName: js_to_java_1.default.String(this.fileName),
        metadata: this.metadata['__fields2java']
          ? this.metadata['__fields2java']()
          : this.metadata,
        originalFileId: js_to_java_1.default.String(this.originalFileId),
        appName: js_to_java_1.default.String(this.appName),
        inputStream: this.inputStream,
        tagName: js_to_java_1.default.String(this.tagName),
        contentType: js_to_java_1.default.String(this.contentType),
        fileId: js_to_java_1.default.String(this.fileId),
      },
    };
  }
}
exports.FileBean = FileBean;
//generate by interpret-cli dubbo2.js
