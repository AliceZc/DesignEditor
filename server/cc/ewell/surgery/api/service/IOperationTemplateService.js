'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOperationTemplateServiceWrapper = {
  saveOperationTemplate: interpret_util_1.argumentMap,
  queryOperationTemplate: interpret_util_1.argumentMap,
};
function IOperationTemplateService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.IOperationTemplateService',
    version: '1.0.0',
    methods: exports.IOperationTemplateServiceWrapper,
  });
}
exports.IOperationTemplateService = IOperationTemplateService;
//generate by interpret-cli dubbo2.js
