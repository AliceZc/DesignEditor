'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DrugMoeServiceWrapper = {
  noBlackParenteralList: interpret_util_1.argumentMap,
};
function DrugMoeService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.drugKnowledge.api.service.DrugMoeService',
    version: '1.0.0',
    methods: exports.DrugMoeServiceWrapper,
  });
}
exports.DrugMoeService = DrugMoeService;
//generate by interpret-cli dubbo2.js
