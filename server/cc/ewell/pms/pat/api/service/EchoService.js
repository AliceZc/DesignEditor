'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.EchoServiceWrapper = {
  echo: interpret_util_1.argumentMap,
};
function EchoService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.pms.pat.api.service.EchoService',
    version: '1.0.0',
    methods: exports.EchoServiceWrapper,
  });
}
exports.EchoService = EchoService;
//generate by interpret-cli dubbo2.js
