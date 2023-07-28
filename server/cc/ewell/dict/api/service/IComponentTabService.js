'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IComponentTabServiceWrapper = {
  queryComponentTabs: interpret_util_1.argumentMap,
};
function IComponentTabService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IComponentTabService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IComponentTabServiceWrapper,
  });
}
exports.IComponentTabService = IComponentTabService;
//generate by interpret-cli dubbo2.js
