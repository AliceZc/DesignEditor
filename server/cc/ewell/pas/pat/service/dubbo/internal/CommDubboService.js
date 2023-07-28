'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.CommDubboServiceWrapper = {
  queryPatientInfoByRecordId: interpret_util_1.argumentMap,
};
function CommDubboService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.pas.pat.service.dubbo.internal.CommDubboService',
    methods: exports.CommDubboServiceWrapper,
    version: '1.0.0',
  });
}
exports.CommDubboService = CommDubboService;
//generate by interpret-cli dubbo2.js
