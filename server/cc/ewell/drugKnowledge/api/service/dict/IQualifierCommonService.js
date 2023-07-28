'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IQualifierCommonServiceWrapper = {
  searchByLikeKeyword: interpret_util_1.argumentMap,
  addOrUpdateList: interpret_util_1.argumentMap,
  deleteByList: interpret_util_1.argumentMap,
  queryQualifierCommonByDictNo: interpret_util_1.argumentMap,
  deleteByDictNo: interpret_util_1.argumentMap,
};
function IQualifierCommonService(dubbo) {
  return dubbo.proxyService({
    dubboInterface:
      'cc.ewell.drugKnowledge.api.service.dict.IQualifierCommonService',
    methods: exports.IQualifierCommonServiceWrapper,
  });
}
exports.IQualifierCommonService = IQualifierCommonService;
//generate by interpret-cli dubbo2.js
