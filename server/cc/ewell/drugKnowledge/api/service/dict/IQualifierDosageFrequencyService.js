'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IQualifierDosageFrequencyServiceWrapper = {
  deleteByCategoryId: interpret_util_1.argumentMap,
  searchByLikeKeyword: interpret_util_1.argumentMap,
  addOrUpdateList: interpret_util_1.argumentMap,
  deleteByFreqId: interpret_util_1.argumentMap,
  deleteByList: interpret_util_1.argumentMap,
  getListByCategoryId: interpret_util_1.argumentMap,
  getOneByFreqId: interpret_util_1.argumentMap,
};
function IQualifierDosageFrequencyService(dubbo) {
  return dubbo.proxyService({
    dubboInterface:
      'cc.ewell.drugKnowledge.api.service.dict.IQualifierDosageFrequencyService',
    methods: exports.IQualifierDosageFrequencyServiceWrapper,
  });
}
exports.IQualifierDosageFrequencyService = IQualifierDosageFrequencyService;
//generate by interpret-cli dubbo2.js
