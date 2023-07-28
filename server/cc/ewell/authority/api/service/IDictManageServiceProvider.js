'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDictManageServiceProviderWrapper = {
  deleteDictData: interpret_util_1.argumentMap,
  addDictData: interpret_util_1.argumentMap,
  getDictData: interpret_util_1.argumentMap,
  updateDictData: interpret_util_1.argumentMap,
  getDictList: interpret_util_1.argumentMap,
};
function IDictManageServiceProvider(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.authority.api.service.IDictManageServiceProvider',
    version: '2.0.0',
    methods: exports.IDictManageServiceProviderWrapper,
  });
}
exports.IDictManageServiceProvider = IDictManageServiceProvider;
//generate by interpret-cli dubbo2.js
