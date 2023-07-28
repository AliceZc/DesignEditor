'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPopRecordLogServiceWrapper = {
  recordPopLog: interpret_util_1.argumentMap,
  queryPopRecordLogList: interpret_util_1.argumentMap,
  queryPopRecordLogDetail: interpret_util_1.argumentMap,
};
function IPopRecordLogService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.basic.api.service.IPopRecordLogService',
    version: '1.0.0',
    methods: exports.IPopRecordLogServiceWrapper,
  });
}
exports.IPopRecordLogService = IPopRecordLogService;
//generate by interpret-cli dubbo2.js
