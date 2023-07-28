'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ISpecialTyServiceWrapper = {
  querySpecial: interpret_util_1.argumentMap,
};
function ISpecialTyService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.infra.ISpecialTyService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.ISpecialTyServiceWrapper,
  });
}
exports.ISpecialTyService = ISpecialTyService;
//generate by interpret-cli dubbo2.js
