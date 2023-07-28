'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class ClinicArchiveDetailReq {
  constructor(params) {
    this.archiveDetailNo = params.archiveDetailNo;
    this.archiveNo = params.archiveNo;
    this.fileName = params.fileName;
    this.createUserId = params.createUserId;
    this.fileRemark = params.fileRemark;
    this.createUser = params.createUser;
    this.fileType = params.fileType;
    this.fileId = params.fileId;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.req.ClinicArchiveDetailReq',
      $: {
        archiveDetailNo: js_to_java_1.default.String(this.archiveDetailNo),
        archiveNo: js_to_java_1.default.String(this.archiveNo),
        fileName: js_to_java_1.default.String(this.fileName),
        createUserId: js_to_java_1.default.String(this.createUserId),
        fileRemark: js_to_java_1.default.String(this.fileRemark),
        createUser: js_to_java_1.default.String(this.createUser),
        fileType: js_to_java_1.default.String(this.fileType),
        fileId: js_to_java_1.default.String(this.fileId),
      },
    };
  }
}
exports.ClinicArchiveDetailReq = ClinicArchiveDetailReq;
//generate by interpret-cli dubbo2.js
