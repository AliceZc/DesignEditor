'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ITaskRecordServiceWrapper = {
  getTaskState: interpret_util_1.argumentMap,
  getTaskList: interpret_util_1.argumentMap,
};
function ITaskRecordService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.ix.api.service.ITaskRecordService',
    version: '1.0.0',
    methods: exports.ITaskRecordServiceWrapper,
  });
}
exports.ITaskRecordService = ITaskRecordService;
//generate by interpret-cli dubbo2.js
