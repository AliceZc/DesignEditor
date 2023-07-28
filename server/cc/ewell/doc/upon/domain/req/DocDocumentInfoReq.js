'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class DocDocumentInfoReq {
  constructor(params) {
    this.documentCoding = params.documentCoding;
    this.creatorGh = params.creatorGh;
    this.creationTime = params.creationTime;
    this.externalNumber = params.externalNumber;
    this.documentClassificationCode = params.documentClassificationCode;
    this.patId = params.patId;
    this.displayName = params.displayName;
    this.creatorId = params.creatorId;
    this.creatorName = params.creatorName;
    this.deptid = params.deptid;
    this.finalEditingTime = params.finalEditingTime;
    this.formatCoding = params.formatCoding;
    this.headerCode = params.headerCode;
    this.footerCode = params.footerCode;
    this.inpVisitId = params.inpVisitId;
    this.content = params.content;
    this.finalEditorRole = params.finalEditorRole;
    this.finalEditorId = params.finalEditorId;
    this.printEndPosition = params.printEndPosition;
    this.printEndPage = params.printEndPage;
    this.headerVersion = params.headerVersion;
    this.formatType = params.formatType;
    this.formatVersion = params.formatVersion;
    this.entryType = params.entryType;
    this.footerVersion = params.footerVersion;
    this.creatorRole = params.creatorRole;
    this.deleteSign = params.deleteSign;
    this.printStartPosition = params.printStartPosition;
    this.formatName = params.formatName;
    this.finalEditorGh = params.finalEditorGh;
    this.finalEditorName = params.finalEditorName;
    this.isMultiple = params.isMultiple;
    this.documentName = params.documentName;
    this.printStartPage = params.printStartPage;
    this.deleteReason = params.deleteReason;
    this.documentState = params.documentState;
    this.areaId = params.areaId;
    this.recordTime = params.recordTime;
    this.printState = params.printState;
    this.documentId = params.documentId;
    this.externalProgramName = params.externalProgramName;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.doc.upon.domain.req.DocDocumentInfoReq',
      $: {
        documentCoding: js_to_java_1.default.String(this.documentCoding),
        creatorGh: js_to_java_1.default.String(this.creatorGh),
        creationTime: this.creationTime,
        externalNumber: js_to_java_1.default.String(this.externalNumber),
        documentClassificationCode: js_to_java_1.default.String(
          this.documentClassificationCode,
        ),
        patId: js_to_java_1.default.String(this.patId),
        displayName: js_to_java_1.default.String(this.displayName),
        creatorId: js_to_java_1.default.String(this.creatorId),
        creatorName: js_to_java_1.default.String(this.creatorName),
        deptid: js_to_java_1.default.String(this.deptid),
        finalEditingTime: this.finalEditingTime,
        formatCoding: js_to_java_1.default.String(this.formatCoding),
        headerCode: js_to_java_1.default.String(this.headerCode),
        footerCode: js_to_java_1.default.String(this.footerCode),
        inpVisitId: js_to_java_1.default.String(this.inpVisitId),
        content: js_to_java_1.default.String(this.content),
        finalEditorRole: js_to_java_1.default.String(this.finalEditorRole),
        finalEditorId: js_to_java_1.default.String(this.finalEditorId),
        printEndPosition: js_to_java_1.default.String(this.printEndPosition),
        printEndPage: js_to_java_1.default.String(this.printEndPage),
        headerVersion: js_to_java_1.default.String(this.headerVersion),
        formatType: js_to_java_1.default.String(this.formatType),
        formatVersion: js_to_java_1.default.String(this.formatVersion),
        entryType: js_to_java_1.default.String(this.entryType),
        footerVersion: js_to_java_1.default.String(this.footerVersion),
        creatorRole: js_to_java_1.default.String(this.creatorRole),
        deleteSign: js_to_java_1.default.String(this.deleteSign),
        printStartPosition: js_to_java_1.default.String(
          this.printStartPosition,
        ),
        formatName: js_to_java_1.default.String(this.formatName),
        finalEditorGh: js_to_java_1.default.String(this.finalEditorGh),
        finalEditorName: js_to_java_1.default.String(this.finalEditorName),
        isMultiple: js_to_java_1.default.String(this.isMultiple),
        documentName: js_to_java_1.default.String(this.documentName),
        printStartPage: js_to_java_1.default.String(this.printStartPage),
        deleteReason: js_to_java_1.default.String(this.deleteReason),
        documentState: js_to_java_1.default.String(this.documentState),
        areaId: js_to_java_1.default.String(this.areaId),
        recordTime: this.recordTime,
        printState: js_to_java_1.default.String(this.printState),
        documentId: js_to_java_1.default.String(this.documentId),
        externalProgramName: js_to_java_1.default.String(
          this.externalProgramName,
        ),
      },
    };
  }
}
exports.DocDocumentInfoReq = DocDocumentInfoReq;
//generate by interpret-cli dubbo2.js
