'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class ClinicalPhotoDetailRes {
  constructor(params) {
    this.clinicArchiveDetailResMap = params.clinicArchiveDetailResMap;
  }
  __fields2java() {
    let clinicArchiveDetailResMapMapTransfer = new Map();
    for (let mapKey in this.clinicArchiveDetailResMap) {
      clinicArchiveDetailResMapMapTransfer.set(
        js_to_java_1.default.String(mapKey),
        js_to_java_1.default.List(
          this.clinicArchiveDetailResMap[mapKey].map((paramItem) => {
            return paramItem ? paramItem.__fields2java() : null;
          }),
        ),
      );
    }
    return {
      $class: 'cc.ewell.patient.api.dto.res.ClinicalPhotoDetailRes',
      $: {
        clinicArchiveDetailResMap: js_to_java_1.default.Map(
          clinicArchiveDetailResMapMapTransfer,
        ),
      },
    };
  }
}
exports.ClinicalPhotoDetailRes = ClinicalPhotoDetailRes;
//generate by interpret-cli dubbo2.js
