'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IAreaServiceWrapper = {
  queryAreaByType: interpret_util_1.argumentMap,
  queryAreaRelation: interpret_util_1.argumentMap,
};
function IAreaService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.infra.IAreaService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IAreaServiceWrapper,
  });
}
exports.IAreaService = IAreaService;
//generate by interpret-cli dubbo2.js
