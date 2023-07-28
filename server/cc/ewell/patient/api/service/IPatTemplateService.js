'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPatTemplateServiceWrapper = {
  saveTemplate: interpret_util_1.argumentMap,
  exportTemplate: interpret_util_1.argumentMap,
  updateTemplateName: interpret_util_1.argumentMap,
  deleteTemplateByName: interpret_util_1.argumentMap,
};
function IPatTemplateService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IPatTemplateService',
    version: '1.0.0',
    methods: exports.IPatTemplateServiceWrapper,
  });
}
exports.IPatTemplateService = IPatTemplateService;
//generate by interpret-cli dubbo2.js
