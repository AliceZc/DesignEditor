'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ISummaryModuleServiceWrapper = {
  addTemplate: interpret_util_1.argumentMap,
  queryLayout: interpret_util_1.argumentMap,
  queryTemplateName: interpret_util_1.argumentMap,
  deleteTemplate: interpret_util_1.argumentMap,
  queryTemplateDetail: interpret_util_1.argumentMap,
  queryModule: interpret_util_1.argumentMap,
};
function ISummaryModuleService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.basic.api.service.ISummaryModuleService',
    version: '1.0.0',
    methods: exports.ISummaryModuleServiceWrapper,
  });
}
exports.ISummaryModuleService = ISummaryModuleService;
//generate by interpret-cli dubbo2.js
