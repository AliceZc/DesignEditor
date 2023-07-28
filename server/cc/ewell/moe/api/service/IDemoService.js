'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDemoServiceWrapper = { demo: interpret_util_1.argumentMap };
function IDemoService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IDemoService',
    version: '1.0.0',
    methods: exports.IDemoServiceWrapper,
  });
}
exports.IDemoService = IDemoService;
//generate by interpret-cli dubbo2.js
