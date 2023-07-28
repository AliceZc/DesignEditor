'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DocUnlockServiceWrapper = {
  createDocApplication: interpret_util_1.argumentMap,
  getDocApplication: interpret_util_1.argumentMap,
  getDepart: interpret_util_1.argumentMap,
  updateDocApplication: interpret_util_1.argumentMap,
};
function DocUnlockService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.doc.service.inner.dubbo.DocUnlockService',
    version: 'V-0.0.1',
    methods: exports.DocUnlockServiceWrapper,
  });
}
exports.DocUnlockService = DocUnlockService;
//generate by interpret-cli dubbo2.js
