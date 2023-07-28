'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DueTimeServiceWrapper = {
  addDueTime: interpret_util_1.argumentMap,
  modifyDueTime: interpret_util_1.argumentMap,
  deleteDueTime: interpret_util_1.argumentMap,
  queryDueTime: interpret_util_1.argumentMap,
};
function DueTimeService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.DueTimeService',
    version: '1.0.0',
    methods: exports.DueTimeServiceWrapper,
  });
}
exports.DueTimeService = DueTimeService;
//generate by interpret-cli dubbo2.js
