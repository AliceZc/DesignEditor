'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IQueueServiceWrapper = {
  queueList: interpret_util_1.argumentMap,
};
function IQueueService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.nurse.queue.service.IQueueService',
    version: '1.0.0',
    methods: exports.IQueueServiceWrapper,
  });
}
exports.IQueueService = IQueueService;
//generate by interpret-cli dubbo2.js
