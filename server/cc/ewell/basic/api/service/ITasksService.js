'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ITasksServiceWrapper = {
  queryTaskOrderList: interpret_util_1.argumentMap,
  queryVital: interpret_util_1.argumentMap,
  queryTaskVital: interpret_util_1.argumentMap,
  queryPoct: interpret_util_1.argumentMap,
  getPoctType: interpret_util_1.argumentMap,
  addPoct: interpret_util_1.argumentMap,
  queryTasksReportList: interpret_util_1.argumentMap,
  queryTasksApptList: interpret_util_1.argumentMap,
  queryTasksCriticalReportList: interpret_util_1.argumentMap,
};
function ITasksService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.basic.api.service.ITasksService',
    version: '1.0.0',
    methods: exports.ITasksServiceWrapper,
  });
}
exports.ITasksService = ITasksService;
//generate by interpret-cli dubbo2.js
