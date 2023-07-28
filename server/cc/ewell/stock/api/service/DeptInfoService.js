'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DeptInfoServiceWrapper = {
  queryDeptInfoList: interpret_util_1.argumentMap,
};
function DeptInfoService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.DeptInfoService',
    version: '1.0.0',
    methods: exports.DeptInfoServiceWrapper,
  });
}
exports.DeptInfoService = DeptInfoService;
//generate by interpret-cli dubbo2.js
