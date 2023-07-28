'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IAccountPageServiceWrapper = {
  updateAccountPageInfo: interpret_util_1.argumentMap,
  queryAccountPageInfoById: interpret_util_1.argumentMap,
  queryEditHistoryById: interpret_util_1.argumentMap,
};
function IAccountPageService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.basic.api.service.IAccountPageService',
    version: '1.0.0',
    methods: exports.IAccountPageServiceWrapper,
  });
}
exports.IAccountPageService = IAccountPageService;
//generate by interpret-cli dubbo2.js
