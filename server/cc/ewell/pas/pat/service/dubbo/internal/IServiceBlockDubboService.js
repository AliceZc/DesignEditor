'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IServiceBlockDubboServiceWrapper = {
  saveServiceBlock: interpret_util_1.argumentMap,
  queryBlockList: interpret_util_1.argumentMap,
  deleteServiceBlock: interpret_util_1.argumentMap,
};
function IServiceBlockDubboService(dubbo) {
  return dubbo.proxyService({
    dubboInterface:
      'cc.ewell.pas.pat.service.dubbo.internal.IServiceBlockDubboService',
    methods: exports.IServiceBlockDubboServiceWrapper,
    version: '1.0.0',
  });
}
exports.IServiceBlockDubboService = IServiceBlockDubboService;
//generate by interpret-cli dubbo2.js
