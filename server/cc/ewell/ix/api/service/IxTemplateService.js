'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IxTemplateServiceWrapper = {
  addIxTemplate: interpret_util_1.argumentMap,
  addOtherOrderTemplate: interpret_util_1.argumentMap,
};
function IxTemplateService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.ix.api.service.IxTemplateService',
    version: '1.0.0',
    methods: exports.IxTemplateServiceWrapper,
  });
}
exports.IxTemplateService = IxTemplateService;
//generate by interpret-cli dubbo2.js
