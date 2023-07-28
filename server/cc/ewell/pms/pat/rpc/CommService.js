'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.CommServiceWrapper = {
  getVisitInfoByQRCodePmi: interpret_util_1.argumentMap,
};
function CommService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.pms.pat.rpc.CommService',
    version: '1.0.0',
    methods: exports.CommServiceWrapper,
  });
}
exports.CommService = CommService;
//generate by interpret-cli dubbo2.js
