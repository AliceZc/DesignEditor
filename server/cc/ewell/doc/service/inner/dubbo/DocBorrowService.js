'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DocBorrowServiceWrapper = {
  createDocApplication: interpret_util_1.argumentMap,
  getDocApplication: interpret_util_1.argumentMap,
  getDepart: interpret_util_1.argumentMap,
  getContent: interpret_util_1.argumentMap,
  getDocApplicationById: interpret_util_1.argumentMap,
  updateDocApplication: interpret_util_1.argumentMap,
};
function DocBorrowService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.doc.service.inner.dubbo.DocBorrowService',
    version: 'V-0.0.1',
    methods: exports.DocBorrowServiceWrapper,
  });
}
exports.DocBorrowService = DocBorrowService;
//generate by interpret-cli dubbo2.js
