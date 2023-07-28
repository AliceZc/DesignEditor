'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ICridServiceWrapper = {
  roomGet: interpret_util_1.argumentMap,
  roomSave: interpret_util_1.argumentMap,
};
function ICridService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.nurse.queue.service.ICridService',
    version: '1.0.0',
    methods: exports.ICridServiceWrapper,
  });
}
exports.ICridService = ICridService;
//generate by interpret-cli dubbo2.js
