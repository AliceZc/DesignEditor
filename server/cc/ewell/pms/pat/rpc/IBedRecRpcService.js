'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IBedRecRpcServiceWrapper = {
  getAvailableWard: interpret_util_1.argumentMap,
};
function IBedRecRpcService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.pms.pat.rpc.IBedRecRpcService',
    version: '1.0.0',
    methods: exports.IBedRecRpcServiceWrapper,
  });
}
exports.IBedRecRpcService = IBedRecRpcService;
//generate by interpret-cli dubbo2.js
