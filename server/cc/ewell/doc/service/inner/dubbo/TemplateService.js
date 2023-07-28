'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.TemplateServiceWrapper = {
  InsertOrUpdateFormat: interpret_util_1.argumentMap,
  getDocClassByCode: interpret_util_1.argumentMap,
  getAllTemplateContentCodingByContentID: interpret_util_1.argumentMap,
  getDocByPage: interpret_util_1.argumentMap,
  getAllContentVersionByFormatcode: interpret_util_1.argumentMap,
  getAllTemplateDoc: interpret_util_1.argumentMap,
  getDocClassTree: interpret_util_1.argumentMap,
  getAllTemplateContentCodingByFormatCode: interpret_util_1.argumentMap,
  ReleaseContent: interpret_util_1.argumentMap,
  getTemplateFormatByDoc: interpret_util_1.argumentMap,
  deleteDoc: interpret_util_1.argumentMap,
  deleteDocClass: interpret_util_1.argumentMap,
  InsertOrUpdateContent: interpret_util_1.argumentMap,
  saveDocClass: interpret_util_1.argumentMap,
  getDocClassByPage: interpret_util_1.argumentMap,
  getDocClassByName: interpret_util_1.argumentMap,
  saveDoc: interpret_util_1.argumentMap,
  getDocByCode: interpret_util_1.argumentMap,
  getAllTemplateFormat: interpret_util_1.argumentMap,
};
function TemplateService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.doc.service.inner.dubbo.TemplateService',
    version: '2.0.0',
    methods: exports.TemplateServiceWrapper,
  });
}
exports.TemplateService = TemplateService;
//generate by interpret-cli dubbo2.js
