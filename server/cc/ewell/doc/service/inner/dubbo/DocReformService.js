'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DocReformServiceWrapper = {
  getReformTasks: interpret_util_1.argumentMap,
  startNewProcess: interpret_util_1.argumentMap,
  executeReformTask: interpret_util_1.argumentMap,
};
function DocReformService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.doc.service.inner.dubbo.DocReformService',
    version: 'V-0.0.1',
    methods: exports.DocReformServiceWrapper,
  });
}
exports.DocReformService = DocReformService;
//generate by interpret-cli dubbo2.js
