'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IBloodAdrsServiceWrapper = {
  addBloodAdrs: interpret_util_1.argumentMap,
  queryBloodAdrs: interpret_util_1.argumentMap,
  queryBloodAdrsPrintForm: interpret_util_1.argumentMap,
};
function IBloodAdrsService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.ix.api.service.IBloodAdrsService',
    version: '1.0.0',
    methods: exports.IBloodAdrsServiceWrapper,
  });
}
exports.IBloodAdrsService = IBloodAdrsService;
//generate by interpret-cli dubbo2.js
