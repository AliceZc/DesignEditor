'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDictServiceWrapper = {
  querOperation: interpret_util_1.argumentMap,
  queryMainDict: interpret_util_1.argumentMap,
  queryDict: interpret_util_1.argumentMap,
  querySubDict: interpret_util_1.argumentMap,
};
function IDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IDictServiceWrapper,
  });
}
exports.IDictService = IDictService;
//generate by interpret-cli dubbo2.js
