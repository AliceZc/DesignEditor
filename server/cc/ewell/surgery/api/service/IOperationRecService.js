'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.IOperationRecServiceWrapper = {};
function IOperationRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.IOperationRecService',
    version: '1.0.0',
    methods: exports.IOperationRecServiceWrapper,
  });
}
exports.IOperationRecService = IOperationRecService;
//generate by interpret-cli dubbo2.js
