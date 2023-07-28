'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DrugThrowServiceWrapper = {
  addDrugThrow: interpret_util_1.argumentMap,
  drugThrowDestroy: interpret_util_1.argumentMap,
  logicDeleteByDetailId: interpret_util_1.argumentMap,
  drugThrowList: interpret_util_1.argumentMap,
  drugThrowDetailList: interpret_util_1.argumentMap,
};
function DrugThrowService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.DrugThrowService',
    version: '1.0.0',
    methods: exports.DrugThrowServiceWrapper,
  });
}
exports.DrugThrowService = DrugThrowService;
//generate by interpret-cli dubbo2.js
