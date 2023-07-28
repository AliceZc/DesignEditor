'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IAreaServiceWrapper = {
  queryArea: interpret_util_1.argumentMap,
};
function IAreaService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.cmh.service.dubbo.IAreaService',
    methods: exports.IAreaServiceWrapper,
    version: '1.0.0',
  });
}
exports.IAreaService = IAreaService;
//generate by interpret-cli dubbo2.js
