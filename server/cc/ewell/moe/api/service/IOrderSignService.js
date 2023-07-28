'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOrderSignServiceWrapper = {
  queryOrderSign: interpret_util_1.argumentMap,
  verifyOrderSign: interpret_util_1.argumentMap,
  reSendOrderSignLcm: interpret_util_1.argumentMap,
  ignoredSignData: interpret_util_1.argumentMap,
  reportSignEdExport: interpret_util_1.argumentMap,
};
function IOrderSignService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IOrderSignService',
    version: '1.0.0',
    methods: exports.IOrderSignServiceWrapper,
  });
}
exports.IOrderSignService = IOrderSignService;
//generate by interpret-cli dubbo2.js
