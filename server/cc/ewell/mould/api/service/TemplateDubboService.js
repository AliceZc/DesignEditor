'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.TemplateDubboServiceWrapper = {
  getTemplateByCode: interpret_util_1.argumentMap,
};
function TemplateDubboService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.mould.api.service.TemplateDubboService',
    version: '1.0.0',
    methods: exports.TemplateDubboServiceWrapper,
  });
}
exports.TemplateDubboService = TemplateDubboService;
//generate by interpret-cli dubbo2.js
