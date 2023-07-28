'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPhotoEditRecServiceWrapper = {
  addPhotoEditRec: interpret_util_1.argumentMap,
  queryPhotoEditRec: interpret_util_1.argumentMap,
  modifyPhotoEditRec: interpret_util_1.argumentMap,
  deletePhotoEditRec: interpret_util_1.argumentMap,
};
function IPhotoEditRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.basic.api.service.IPhotoEditRecService',
    version: '1.0.0',
    methods: exports.IPhotoEditRecServiceWrapper,
  });
}
exports.IPhotoEditRecService = IPhotoEditRecService;
//generate by interpret-cli dubbo2.js
