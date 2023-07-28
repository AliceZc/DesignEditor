'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.AutoReqServiceWrapper = {
  deleteAutoReq: interpret_util_1.argumentMap,
  addAutoReq: interpret_util_1.argumentMap,
  getAutoConfig: interpret_util_1.argumentMap,
  aotuReqDetail: interpret_util_1.argumentMap,
};
function AutoReqService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.AutoReqService',
    version: '1.0.0',
    methods: exports.AutoReqServiceWrapper,
  });
}
exports.AutoReqService = AutoReqService;
//generate by interpret-cli dubbo2.js
