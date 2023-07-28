'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class ClinicArchiveReq {
  constructor(params) {
    this.archiveNo = params.archiveNo;
    this.archiveType = params.archiveType;
    this.createUserId = params.createUserId;
    this.archiveName = params.archiveName;
    this.patId = params.patId;
    this.createUser = params.createUser;
    this.visitNo = params.visitNo;
    this.archiveSubtype = params.archiveSubtype;
    this.visitType = params.visitType;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.patient.api.dto.req.ClinicArchiveReq',
      $: {
        archiveNo: js_to_java_1.default.String(this.archiveNo),
        archiveType: js_to_java_1.default.String(this.archiveType),
        createUserId: js_to_java_1.default.String(this.createUserId),
        archiveName: js_to_java_1.default.String(this.archiveName),
        patId: js_to_java_1.default.String(this.patId),
        createUser: js_to_java_1.default.String(this.createUser),
        visitNo: js_to_java_1.default.String(this.visitNo),
        archiveSubtype: js_to_java_1.default.String(this.archiveSubtype),
        visitType: js_to_java_1.default.String(this.visitType),
      },
    };
  }
}
exports.ClinicArchiveReq = ClinicArchiveReq;
//generate by interpret-cli dubbo2.js
