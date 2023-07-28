'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOtherOrderBillServiceWrapper = {
  queryItem: interpret_util_1.argumentMap,
};
function IOtherOrderBillService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IOtherOrderBillService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IOtherOrderBillServiceWrapper,
  });
}
exports.IOtherOrderBillService = IOtherOrderBillService;
//generate by interpret-cli dubbo2.js
