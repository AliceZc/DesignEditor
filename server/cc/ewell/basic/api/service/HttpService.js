'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.HttpServiceWrapper = {
  queryContextResult: interpret_util_1.argumentMap,
};
function HttpService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.basic.api.service.HttpService',
    version: '1.0.0',
    methods: exports.HttpServiceWrapper,
  });
}
exports.HttpService = HttpService;
//generate by interpret-cli dubbo2.js
