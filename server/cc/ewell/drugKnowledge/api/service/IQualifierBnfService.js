'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IQualifierBnfServiceWrapper = {
  updateBatch: interpret_util_1.argumentMap,
  selectOne: interpret_util_1.argumentMap,
  selectList: interpret_util_1.argumentMap,
  insert: interpret_util_1.argumentMap,
  update: interpret_util_1.argumentMap,
  deleteBatch: interpret_util_1.argumentMap,
};
function IQualifierBnfService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.drugKnowledge.api.service.IQualifierBnfService',
    version: '1.0.0',
    methods: exports.IQualifierBnfServiceWrapper,
  });
}
exports.IQualifierBnfService = IQualifierBnfService;
//generate by interpret-cli dubbo2.js
