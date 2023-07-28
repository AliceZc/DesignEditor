'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ElementManageServiceWrapper = {
  deleteSection: interpret_util_1.argumentMap,
  getElementById: interpret_util_1.argumentMap,
  saveRangeDictDetail: interpret_util_1.argumentMap,
  saveElmentRangeRelation: interpret_util_1.argumentMap,
  getRangeDictDetailByElement: interpret_util_1.argumentMap,
  getElementsByGroup: interpret_util_1.argumentMap,
  getRangeDictById: interpret_util_1.argumentMap,
  getRangeDictByPage: interpret_util_1.argumentMap,
  updateElement: interpret_util_1.argumentMap,
  deleteRangeDictById: interpret_util_1.argumentMap,
  saveGroupContent: interpret_util_1.argumentMap,
  getElementListByName: interpret_util_1.argumentMap,
  getElementListByPage: interpret_util_1.argumentMap,
  deleteGroup: interpret_util_1.argumentMap,
  saveRangeDictData: interpret_util_1.argumentMap,
  getValidRangeDictDetails: interpret_util_1.argumentMap,
  saveGroup: interpret_util_1.argumentMap,
  deleteRangeDictDetailById: interpret_util_1.argumentMap,
  getSectionListByPage: interpret_util_1.argumentMap,
  getGroupListByPage: interpret_util_1.argumentMap,
  getSectionById: interpret_util_1.argumentMap,
  getAllRangeDictDetailsById: interpret_util_1.argumentMap,
  saveElement: interpret_util_1.argumentMap,
  saveSection: interpret_util_1.argumentMap,
  getRangeDictByName: interpret_util_1.argumentMap,
  saveGroupElements: interpret_util_1.argumentMap,
  deleteElementById: interpret_util_1.argumentMap,
  saveRangeDict: interpret_util_1.argumentMap,
  getGroupById: interpret_util_1.argumentMap,
};
function ElementManageService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.doc.service.inner.dubbo.ElementManageService',
    version: 'V-0.0.1',
    methods: exports.ElementManageServiceWrapper,
  });
}
exports.ElementManageService = ElementManageService;
//generate by interpret-cli dubbo2.js
