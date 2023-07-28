'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IRouteTypeDictServiceWrapper = {
  queryBySerialNoOrCode: interpret_util_1.argumentMap,
  queryAll: interpret_util_1.argumentMap,
};
function IRouteTypeDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IRouteTypeDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IRouteTypeDictServiceWrapper,
  });
}
exports.IRouteTypeDictService = IRouteTypeDictService;
//generate by interpret-cli dubbo2.js
