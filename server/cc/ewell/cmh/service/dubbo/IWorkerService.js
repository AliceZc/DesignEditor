'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IWorkerServiceWrapper = {
  queryWorker: interpret_util_1.argumentMap,
};
function IWorkerService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.cmh.service.dubbo.IWorkerService',
    methods: exports.IWorkerServiceWrapper,
    version: '1.0.0',
  });
}
exports.IWorkerService = IWorkerService;
//generate by interpret-cli dubbo2.js
