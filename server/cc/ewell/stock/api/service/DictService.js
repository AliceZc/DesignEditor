'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DictServiceWrapper = {
  optionalList: interpret_util_1.argumentMap,
  listVmpItem: interpret_util_1.argumentMap,
};
function DictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.DictService',
    version: '1.0.0',
    methods: exports.DictServiceWrapper,
  });
}
exports.DictService = DictService;
//generate by interpret-cli dubbo2.js
