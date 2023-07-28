'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IMdmServiceWrapper = {
  getValRangeList: interpret_util_1.argumentMap,
  getValRange: interpret_util_1.argumentMap,
  queryMdmDict: interpret_util_1.argumentMap,
  queryMdmDictMoreData: interpret_util_1.argumentMap,
};
function IMdmService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.infra.IMdmService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IMdmServiceWrapper,
  });
}
exports.IMdmService = IMdmService;
//generate by interpret-cli dubbo2.js
