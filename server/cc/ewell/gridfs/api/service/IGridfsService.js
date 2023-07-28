'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IGridfsServiceWrapper = {
  downloadFile: interpret_util_1.argumentMap,
  deleteFile: interpret_util_1.argumentMap,
  uploadFile: interpret_util_1.argumentMap,
  uploadFileNew: interpret_util_1.argumentMap,
};
function IGridfsService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.gridfs.api.service.IGridfsService',
    version: '1.0.0',
    methods: exports.IGridfsServiceWrapper,
  });
}
exports.IGridfsService = IGridfsService;
//generate by interpret-cli dubbo2.js
