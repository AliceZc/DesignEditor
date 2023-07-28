'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.MedicalServiceWrapper = {
  deleteDocments: interpret_util_1.argumentMap,
  getDocmentListByinpVisitId: interpret_util_1.argumentMap,
  getDocumentTreeByPatient: interpret_util_1.argumentMap,
  commitDocments: interpret_util_1.argumentMap,
  SaveDocumentPrintTree: interpret_util_1.argumentMap,
  saveDocments: interpret_util_1.argumentMap,
  getDocumentTree: interpret_util_1.argumentMap,
  getDocumentTreeByFormatType: interpret_util_1.argumentMap,
  getDocumentPrintTree: interpret_util_1.argumentMap,
  getDocmentListByinpVisitIdAndDocID: interpret_util_1.argumentMap,
  getContectInfoByDocumentIDs: interpret_util_1.argumentMap,
  getDocumentOpenNewTree: interpret_util_1.argumentMap,
  getDocumentHeadInfo: interpret_util_1.argumentMap,
};
function MedicalService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.doc.service.inner.dubbo.MedicalService',
    version: '2.0.0',
    methods: exports.MedicalServiceWrapper,
  });
}
exports.MedicalService = MedicalService;
//generate by interpret-cli dubbo2.js
