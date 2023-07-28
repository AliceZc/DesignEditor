'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDicServiceWrapper = { listDicRes: interpret_util_1.argumentMap };
function IDicService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IDicService',
    version: '1.0.0',
    methods: exports.IDicServiceWrapper,
  });
}
exports.IDicService = IDicService;
//generate by interpret-cli dubbo2.js
