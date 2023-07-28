'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.PrePackServiceWrapper = {
  deletePreDetail: interpret_util_1.argumentMap,
  prePackDetail: interpret_util_1.argumentMap,
  prePackRecord: interpret_util_1.argumentMap,
  prepackOverUse: interpret_util_1.argumentMap,
  prePackList: interpret_util_1.argumentMap,
  prepackJobFinalInfo: interpret_util_1.argumentMap,
  addPrePack: interpret_util_1.argumentMap,
};
function PrePackService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.PrePackService',
    version: '1.0.0',
    methods: exports.PrePackServiceWrapper,
  });
}
exports.PrePackService = PrePackService;
//generate by interpret-cli dubbo2.js
