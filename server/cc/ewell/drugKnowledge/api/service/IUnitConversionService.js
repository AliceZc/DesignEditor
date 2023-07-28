'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IUnitConversionServiceWrapper = {
  deleteByItemCodeAndLevel: interpret_util_1.argumentMap,
  selectByItemCodeAndLevel: interpret_util_1.argumentMap,
  addOrUpdateOne: interpret_util_1.argumentMap,
};
function IUnitConversionService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.drugKnowledge.api.service.IUnitConversionService',
    version: '1.0.0',
    methods: exports.IUnitConversionServiceWrapper,
  });
}
exports.IUnitConversionService = IUnitConversionService;
//generate by interpret-cli dubbo2.js
