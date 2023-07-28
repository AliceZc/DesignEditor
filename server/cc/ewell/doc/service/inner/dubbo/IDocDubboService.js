'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDocDubboServiceWrapper = {
  listEveryMoe: interpret_util_1.argumentMap,
};
function IDocDubboService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.doc.service.inner.dubbo.IDocDubboService',
    version: 'V-0.0.1',
    methods: exports.IDocDubboServiceWrapper,
  });
}
exports.IDocDubboService = IDocDubboService;
//generate by interpret-cli dubbo2.js
