'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDrugFreqTimeServiceWrapper = {
  getDrugStartTimeByFreq: interpret_util_1.argumentMap,
};
function IDrugFreqTimeService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IDrugFreqTimeService',
    version: '1.0.0',
    methods: exports.IDrugFreqTimeServiceWrapper,
  });
}
exports.IDrugFreqTimeService = IDrugFreqTimeService;
//generate by interpret-cli dubbo2.js
