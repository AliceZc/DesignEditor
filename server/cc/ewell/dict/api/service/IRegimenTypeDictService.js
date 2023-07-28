'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IRegimenTypeDictServiceWrapper = {
  queryBySerialNoOrCode: interpret_util_1.argumentMap,
  queryAll: interpret_util_1.argumentMap,
};
function IRegimenTypeDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IRegimenTypeDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IRegimenTypeDictServiceWrapper,
  });
}
exports.IRegimenTypeDictService = IRegimenTypeDictService;
//generate by interpret-cli dubbo2.js
