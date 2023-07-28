'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IInpatientAreaDictServiceWrapper = {
  queryBySerialNoOrCode: interpret_util_1.argumentMap,
  queryAll: interpret_util_1.argumentMap,
};
function IInpatientAreaDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IInpatientAreaDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IInpatientAreaDictServiceWrapper,
  });
}
exports.IInpatientAreaDictService = IInpatientAreaDictService;
//generate by interpret-cli dubbo2.js
