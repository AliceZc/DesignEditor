'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ErrorLogServiceWrapper = {
  selectList: interpret_util_1.argumentMap,
};
function ErrorLogService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.emr.esb.api.service.ErrorLogService',
    version: '1.0.0',
    methods: exports.ErrorLogServiceWrapper,
  });
}
exports.ErrorLogService = ErrorLogService;
//generate by interpret-cli dubbo2.js
