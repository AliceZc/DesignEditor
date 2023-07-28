'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.EsbLogServiceWrapper = {
  selectList: interpret_util_1.argumentMap,
  retry: interpret_util_1.argumentMap,
};
function EsbLogService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.emr.esb.api.service.EsbLogService',
    version: '1.0.0',
    methods: exports.EsbLogServiceWrapper,
  });
}
exports.EsbLogService = EsbLogService;
//generate by interpret-cli dubbo2.js
