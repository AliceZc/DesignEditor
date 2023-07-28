'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOtherTemplateServiceWrapper = {
  deleteOtherTemplate: interpret_util_1.argumentMap,
  searchOtherTemplateDetail: interpret_util_1.argumentMap,
  deleteOtherTemplateDetail: interpret_util_1.argumentMap,
  updateOtherTemplateDetail: interpret_util_1.argumentMap,
  saveOtherTemplate: interpret_util_1.argumentMap,
  searchOtherTemplate: interpret_util_1.argumentMap,
  addOtherTemplateDetail: interpret_util_1.argumentMap,
};
function IOtherTemplateService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IOtherTemplateService',
    version: '1.0.0',
    methods: exports.IOtherTemplateServiceWrapper,
  });
}
exports.IOtherTemplateService = IOtherTemplateService;
//generate by interpret-cli dubbo2.js
