'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDurationUnitDictServiceWrapper = {
  queryBySerialNoOrCode: interpret_util_1.argumentMap,
  queryAll: interpret_util_1.argumentMap,
};
function IDurationUnitDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IDurationUnitDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IDurationUnitDictServiceWrapper,
  });
}
exports.IDurationUnitDictService = IDurationUnitDictService;
//generate by interpret-cli dubbo2.js
