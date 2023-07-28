'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IEyeRecServiceWrapper = {
  insertEye: interpret_util_1.argumentMap,
  editEye: interpret_util_1.argumentMap,
  queryEyeList: interpret_util_1.argumentMap,
  cancelEye: interpret_util_1.argumentMap,
  queryEyeReport: interpret_util_1.argumentMap,
  queryPath: interpret_util_1.argumentMap,
};
function IEyeRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.ix.api.service.IEyeRecService',
    version: '1.0.0',
    methods: exports.IEyeRecServiceWrapper,
  });
}
exports.IEyeRecService = IEyeRecService;
//generate by interpret-cli dubbo2.js
