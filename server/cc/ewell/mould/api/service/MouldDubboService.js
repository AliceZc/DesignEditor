'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.MouldDubboServiceWrapper = {
  getMouldDataById: interpret_util_1.argumentMap,
  getMouldDataByCode: interpret_util_1.argumentMap,
  mouldRelease: interpret_util_1.argumentMap,
  updateMouldData: interpret_util_1.argumentMap,
  addMould: interpret_util_1.argumentMap,
  getMouldList: interpret_util_1.argumentMap,
  exportMould: interpret_util_1.argumentMap,
};
function MouldDubboService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.mould.api.service.MouldDubboService',
    version: '1.0.0',
    methods: exports.MouldDubboServiceWrapper,
  });
}
exports.MouldDubboService = MouldDubboService;
//generate by interpret-cli dubbo2.js
