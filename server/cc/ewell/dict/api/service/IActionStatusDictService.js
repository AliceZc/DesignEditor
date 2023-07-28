'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IActionStatusDictServiceWrapper = {
  queryBySerialNoOrCode: interpret_util_1.argumentMap,
  queryAll: interpret_util_1.argumentMap,
};
function IActionStatusDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IActionStatusDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IActionStatusDictServiceWrapper,
  });
}
exports.IActionStatusDictService = IActionStatusDictService;
//generate by interpret-cli dubbo2.js
