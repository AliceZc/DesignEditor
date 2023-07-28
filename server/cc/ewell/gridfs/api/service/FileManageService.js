'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.FileManageServiceWrapper = {
  queryFileByCondition: interpret_util_1.argumentMap,
  getPathContent: interpret_util_1.argumentMap,
  addAndUpdateFileFolder: interpret_util_1.argumentMap,
  getCommonDict: interpret_util_1.argumentMap,
  getBuckets: interpret_util_1.argumentMap,
};
function FileManageService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.gridfs.api.service.FileManageService',
    version: '1.0.0',
    methods: exports.FileManageServiceWrapper,
  });
}
exports.FileManageService = FileManageService;
//generate by interpret-cli dubbo2.js
