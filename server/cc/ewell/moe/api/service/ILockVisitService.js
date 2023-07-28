'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ILockVisitServiceWrapper = {
  forceUnLock: interpret_util_1.argumentMap,
  isLock: interpret_util_1.argumentMap,
  selectList: interpret_util_1.argumentMap,
  isExecuted: interpret_util_1.argumentMap,
  lockUser: interpret_util_1.argumentMap,
};
function ILockVisitService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.ILockVisitService',
    version: '1.0.0',
    methods: exports.ILockVisitServiceWrapper,
  });
}
exports.ILockVisitService = ILockVisitService;
//generate by interpret-cli dubbo2.js
