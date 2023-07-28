'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IClockServiceWrapper = {
  addClock: interpret_util_1.argumentMap,
};
function IClockService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.basic.api.service.IClockService',
    version: '1.0.0',
    methods: exports.IClockServiceWrapper,
  });
}
exports.IClockService = IClockService;
//generate by interpret-cli dubbo2.js
