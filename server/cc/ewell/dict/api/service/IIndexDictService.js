'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IIndexDictServiceWrapper = {
  queryIndexDict: interpret_util_1.argumentMap,
};
function IIndexDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IIndexDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IIndexDictServiceWrapper,
  });
}
exports.IIndexDictService = IIndexDictService;
//generate by interpret-cli dubbo2.js
