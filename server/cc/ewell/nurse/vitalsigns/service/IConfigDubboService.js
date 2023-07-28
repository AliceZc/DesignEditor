'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IConfigDubboServiceWrapper = {
  getAllTemplateItems: interpret_util_1.argumentMap,
};
function IConfigDubboService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.nurse.vitalsigns.service.IConfigDubboService',
    version: '1.0.0',
    methods: exports.IConfigDubboServiceWrapper,
  });
}
exports.IConfigDubboService = IConfigDubboService;
//generate by interpret-cli dubbo2.js
