'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IQualifierCommonDetailServiceWrapper = {
  getListByDictNo: interpret_util_1.argumentMap,
  searchByLikeKeyword: interpret_util_1.argumentMap,
  addOrUpdateList: interpret_util_1.argumentMap,
  deleteByList: interpret_util_1.argumentMap,
  getOneByDictSubNo: interpret_util_1.argumentMap,
  deleteByDictNo: interpret_util_1.argumentMap,
  deleteByDictSubNo: interpret_util_1.argumentMap,
};
function IQualifierCommonDetailService(dubbo) {
  return dubbo.proxyService({
    dubboInterface:
      'cc.ewell.drugKnowledge.api.service.dict.IQualifierCommonDetailService',
    methods: exports.IQualifierCommonDetailServiceWrapper,
  });
}
exports.IQualifierCommonDetailService = IQualifierCommonDetailService;
//generate by interpret-cli dubbo2.js
