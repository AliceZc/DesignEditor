'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOrderPauseServiceWrapper = {
  queryOneOrderPause: interpret_util_1.argumentMap,
  addOrderPause: interpret_util_1.argumentMap,
  queryOrderPause: interpret_util_1.argumentMap,
  modifyOrderPause: interpret_util_1.argumentMap,
  stopOrderPause: interpret_util_1.argumentMap,
};
function IOrderPauseService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IOrderPauseService',
    version: '1.0.0',
    methods: exports.IOrderPauseServiceWrapper,
  });
}
exports.IOrderPauseService = IOrderPauseService;
//generate by interpret-cli dubbo2.js
