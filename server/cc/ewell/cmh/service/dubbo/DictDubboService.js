'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DictDubboServiceWrapper = {
  queryDictByCode: interpret_util_1.argumentMap,
  getDistrictAndSubDistrictByCountryCode: interpret_util_1.argumentMap,
  queryDict: interpret_util_1.argumentMap,
  textEncodingConversion: interpret_util_1.argumentMap,
};
function DictDubboService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.cmh.service.dubbo.DictDubboService',
    methods: exports.DictDubboServiceWrapper,
    version: '1.0.0',
  });
}
exports.DictDubboService = DictDubboService;
//generate by interpret-cli dubbo2.js
