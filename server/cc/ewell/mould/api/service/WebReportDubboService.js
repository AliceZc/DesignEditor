'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.WebReportDubboServiceWrapper = {
  printReport: interpret_util_1.argumentMap,
};
function WebReportDubboService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.mould.api.service.WebReportDubboService',
    version: '1.0.0',
    methods: exports.WebReportDubboServiceWrapper,
  });
}
exports.WebReportDubboService = WebReportDubboService;
//generate by interpret-cli dubbo2.js
