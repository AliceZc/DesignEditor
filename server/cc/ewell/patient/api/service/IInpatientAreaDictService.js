'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IInpatientAreaDictServiceWrapper = {
  queryAreaDict: interpret_util_1.argumentMap,
};
function IInpatientAreaDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IInpatientAreaDictService',
    version: '1.0.0',
    methods: exports.IInpatientAreaDictServiceWrapper,
  });
}
exports.IInpatientAreaDictService = IInpatientAreaDictService;
//generate by interpret-cli dubbo2.js
