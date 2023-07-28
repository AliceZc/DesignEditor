'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ICommonDosageServiceWrapper = {
  addOrUpdateList: interpret_util_1.argumentMap,
  searchListByItemCodeAndLevel: interpret_util_1.argumentMap,
  deleteByItemCodeAndLevel: interpret_util_1.argumentMap,
};
function ICommonDosageService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.drugKnowledge.api.service.ICommonDosageService',
    version: '1.0.0',
    methods: exports.ICommonDosageServiceWrapper,
  });
}
exports.ICommonDosageService = ICommonDosageService;
//generate by interpret-cli dubbo2.js
