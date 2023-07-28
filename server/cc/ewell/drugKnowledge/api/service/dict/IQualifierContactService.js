'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IQualifierContactServiceWrapper = {
  getListByCompanyId: interpret_util_1.argumentMap,
  deleteByCompanyId: interpret_util_1.argumentMap,
  deleteByContactId: interpret_util_1.argumentMap,
  searchByLikeKeyword: interpret_util_1.argumentMap,
  addOrUpdateList: interpret_util_1.argumentMap,
  deleteByContactCategoryId: interpret_util_1.argumentMap,
  deleteByList: interpret_util_1.argumentMap,
  getOneByContactId: interpret_util_1.argumentMap,
  getListByContactCategoryId: interpret_util_1.argumentMap,
};
function IQualifierContactService(dubbo) {
  return dubbo.proxyService({
    dubboInterface:
      'cc.ewell.drugKnowledge.api.service.dict.IQualifierContactService',
    methods: exports.IQualifierContactServiceWrapper,
  });
}
exports.IQualifierContactService = IQualifierContactService;
//generate by interpret-cli dubbo2.js
