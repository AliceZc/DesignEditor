'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ITherapeuticClassDictServiceWrapper = {
  queryBySerialNoOrCode: interpret_util_1.argumentMap,
  queryAll: interpret_util_1.argumentMap,
};
function ITherapeuticClassDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.ITherapeuticClassDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.ITherapeuticClassDictServiceWrapper,
  });
}
exports.ITherapeuticClassDictService = ITherapeuticClassDictService;
//generate by interpret-cli dubbo2.js
