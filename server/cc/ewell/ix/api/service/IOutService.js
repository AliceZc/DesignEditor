'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOutServiceWrapper = {
  submitIpOrder: interpret_util_1.argumentMap,
  validRequestOrder: interpret_util_1.argumentMap,
};
function IOutService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.ix.api.service.IOutService',
    version: '1.0.0',
    methods: exports.IOutServiceWrapper,
  });
}
exports.IOutService = IOutService;
//generate by interpret-cli dubbo2.js
