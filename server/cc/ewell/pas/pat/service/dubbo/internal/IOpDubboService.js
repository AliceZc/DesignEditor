'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOpDubboServiceWrapper = {
  getConsultationList: interpret_util_1.argumentMap,
  call: interpret_util_1.argumentMap,
  start: interpret_util_1.argumentMap,
  opCheckOut: interpret_util_1.argumentMap,
  nextOpActivity: interpret_util_1.argumentMap,
  joinConsult: interpret_util_1.argumentMap,
  reConsult: interpret_util_1.argumentMap,
  endConsult: interpret_util_1.argumentMap,
  updateNext: interpret_util_1.argumentMap,
};
function IOpDubboService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.pas.pat.service.dubbo.internal.IOpDubboService',
    methods: exports.IOpDubboServiceWrapper,
    version: '1.0.0',
  });
}
exports.IOpDubboService = IOpDubboService;
//generate by interpret-cli dubbo2.js
