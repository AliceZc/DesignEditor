'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class ClinicArchiveDetailRes {
  constructor(params) {
    this.archiveDetailNo = params.archiveDetailNo;
    this.archiveNo = params.archiveNo;
    this.fileName = params.fileName;
    this.fileRemark = params.fileRemark;
    this.createTime = params.createTime;
    this.fileType = params.fileType;
    this.fileId = params.fileId;
    this.createDate = params.createDate;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.res.ClinicArchiveDetailRes',
      $: {
        archiveDetailNo: js_to_java_1.default.String(this.archiveDetailNo),
        archiveNo: js_to_java_1.default.String(this.archiveNo),
        fileName: js_to_java_1.default.String(this.fileName),
        fileRemark: js_to_java_1.default.String(this.fileRemark),
        createTime: js_to_java_1.default.String(this.createTime),
        fileType: js_to_java_1.default.String(this.fileType),
        fileId: js_to_java_1.default.String(this.fileId),
        createDate: js_to_java_1.default.String(this.createDate),
      },
    };
  }
}
exports.ClinicArchiveDetailRes = ClinicArchiveDetailRes;
//generate by interpret-cli dubbo2.js
