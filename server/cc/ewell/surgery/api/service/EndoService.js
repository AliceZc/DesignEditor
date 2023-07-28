'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.EndoServiceWrapper = {
  queryEndoReport: interpret_util_1.argumentMap,
  queryAccessionInfo: interpret_util_1.argumentMap,
};
function EndoService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.EndoService',
    version: '1.0.0',
    methods: exports.EndoServiceWrapper,
  });
}
exports.EndoService = EndoService;
//generate by interpret-cli dubbo2.js
