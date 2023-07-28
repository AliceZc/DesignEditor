'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IShellServiceWrapper = {
  queryPatientHeadInfo: interpret_util_1.argumentMap,
};
function IShellService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.basic.api.service.IShellService',
    version: '1.0.0',
    methods: exports.IShellServiceWrapper,
  });
}
exports.IShellService = IShellService;
//generate by interpret-cli dubbo2.js
