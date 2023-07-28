'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.MyTestServiceWrapper = {
  getMyTestListByPage: interpret_util_1.argumentMap,
};
function MyTestService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.doc.service.inner.dubbo.MyTestService',
    version: 'V-0.0.1',
    methods: exports.MyTestServiceWrapper,
  });
}
exports.MyTestService = MyTestService;
//generate by interpret-cli dubbo2.js
