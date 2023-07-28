'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.TestServiceWrapper = {
  EntityShow2: interpret_util_1.argumentMap,
  getServerTime: interpret_util_1.argumentMap,
};
function TestService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.doc.service.inner.dubbo.TestService',
    version: 'V-0.0.1',
    methods: exports.TestServiceWrapper,
  });
}
exports.TestService = TestService;
//generate by interpret-cli dubbo2.js
