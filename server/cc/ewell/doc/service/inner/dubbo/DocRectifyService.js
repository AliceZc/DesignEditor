'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DocRectifyServiceWrapper = {
  createDocApplication: interpret_util_1.argumentMap,
  verifyDocApplication: interpret_util_1.argumentMap,
  getDocApplicationBySelf: interpret_util_1.argumentMap,
  getDocApplicationByDept: interpret_util_1.argumentMap,
  getDocRequireByPage: interpret_util_1.argumentMap,
  getDeptList: interpret_util_1.argumentMap,
  getDocApplication: interpret_util_1.argumentMap,
  cancelDocApplication: interpret_util_1.argumentMap,
  getApplicationById: interpret_util_1.argumentMap,
  createDocRequire: interpret_util_1.argumentMap,
  updateDocApplication: interpret_util_1.argumentMap,
};
function DocRectifyService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.doc.service.inner.dubbo.DocRectifyService',
    version: 'V-0.0.1',
    methods: exports.DocRectifyServiceWrapper,
  });
}
exports.DocRectifyService = DocRectifyService;
//generate by interpret-cli dubbo2.js
