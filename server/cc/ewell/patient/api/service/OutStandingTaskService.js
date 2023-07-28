'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.OutStandingTaskServiceWrapper = {
  queryInpsBySelect: interpret_util_1.argumentMap,
};
function OutStandingTaskService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.OutStandingTaskService',
    version: '1.0.0',
    methods: exports.OutStandingTaskServiceWrapper,
  });
}
exports.OutStandingTaskService = OutStandingTaskService;
//generate by interpret-cli dubbo2.js
