'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDrugOutServiceWrapper = {
  queryTradeMasterList: interpret_util_1.argumentMap,
};
function IDrugOutService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.drugKnowledge.api.service.IDrugOutService',
    version: '1.0.0',
    methods: exports.IDrugOutServiceWrapper,
  });
}
exports.IDrugOutService = IDrugOutService;
//generate by interpret-cli dubbo2.js
