'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.BatchPackInfoServiceWrapper = {
  queryPackInfo: interpret_util_1.argumentMap,
  batchInfo: interpret_util_1.argumentMap,
  batchinfoUpdate: interpret_util_1.argumentMap,
};
function BatchPackInfoService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.BatchPackInfoService',
    version: '1.0.0',
    methods: exports.BatchPackInfoServiceWrapper,
  });
}
exports.BatchPackInfoService = BatchPackInfoService;
//generate by interpret-cli dubbo2.js
