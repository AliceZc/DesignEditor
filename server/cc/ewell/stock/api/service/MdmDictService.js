'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.MdmDictServiceWrapper = {
  getMdmDictData: interpret_util_1.argumentMap,
};
function MdmDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.MdmDictService',
    version: '1.0.0',
    methods: exports.MdmDictServiceWrapper,
  });
}
exports.MdmDictService = MdmDictService;
//generate by interpret-cli dubbo2.js
