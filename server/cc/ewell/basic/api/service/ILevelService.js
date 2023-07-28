'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ILevelServiceWrapper = {
  queryLevelInfoByType: interpret_util_1.argumentMap,
  addLevelInfo: interpret_util_1.argumentMap,
  deleteLevelInfoById: interpret_util_1.argumentMap,
  updateLevelById: interpret_util_1.argumentMap,
  deleteAndMoveById: interpret_util_1.argumentMap,
};
function ILevelService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.basic.api.service.ILevelService',
    version: '1.0.0',
    methods: exports.ILevelServiceWrapper,
  });
}
exports.ILevelService = ILevelService;
//generate by interpret-cli dubbo2.js
