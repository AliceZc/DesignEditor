'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IQualifierCompanyServiceWrapper = {
  deleteByCompanyId: interpret_util_1.argumentMap,
  searchByLikeKeyword: interpret_util_1.argumentMap,
  addOrUpdateList: interpret_util_1.argumentMap,
  deleteByList: interpret_util_1.argumentMap,
  getOneByCompanyId: interpret_util_1.argumentMap,
};
function IQualifierCompanyService(dubbo) {
  return dubbo.proxyService({
    dubboInterface:
      'cc.ewell.drugKnowledge.api.service.dict.IQualifierCompanyService',
    methods: exports.IQualifierCompanyServiceWrapper,
  });
}
exports.IQualifierCompanyService = IQualifierCompanyService;
//generate by interpret-cli dubbo2.js
