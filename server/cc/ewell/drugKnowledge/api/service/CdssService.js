'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.CdssServiceWrapper = {
  checkDoseParameterPopup: interpret_util_1.argumentMap,
  checkDoseParameter: interpret_util_1.argumentMap,
};
function CdssService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.drugKnowledge.api.service.CdssService',
    version: '1.0.0',
    methods: exports.CdssServiceWrapper,
  });
}
exports.CdssService = CdssService;
//generate by interpret-cli dubbo2.js
