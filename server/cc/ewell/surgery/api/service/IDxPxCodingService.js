'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDxPxCodingServiceWrapper = {
  queryFreeTextList: interpret_util_1.argumentMap,
  saveCodedSurgeryRec: interpret_util_1.argumentMap,
  saveCodedDiagnosisRec: interpret_util_1.argumentMap,
  queryCodingRecList: interpret_util_1.argumentMap,
  exportExcel: interpret_util_1.argumentMap,
};
function IDxPxCodingService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.IDxPxCodingService',
    version: '1.0.0',
    methods: exports.IDxPxCodingServiceWrapper,
  });
}
exports.IDxPxCodingService = IDxPxCodingService;
//generate by interpret-cli dubbo2.js
