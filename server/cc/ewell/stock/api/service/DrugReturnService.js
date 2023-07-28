'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DrugReturnServiceWrapper = {
  saveOrCommitUpdate: interpret_util_1.argumentMap,
  saveOrCommit: interpret_util_1.argumentMap,
  drugReturnHistory: interpret_util_1.argumentMap,
  saveOrCommitNew: interpret_util_1.argumentMap,
  cancelDrugReturn: interpret_util_1.argumentMap,
  barCodeDrugReturn: interpret_util_1.argumentMap,
  unReturnListNew: interpret_util_1.argumentMap,
  drugReturnConfirm: interpret_util_1.argumentMap,
  drugScan: interpret_util_1.argumentMap,
  returnListByBarCode: interpret_util_1.argumentMap,
  returnDetailListNew: interpret_util_1.argumentMap,
  returnDetailList: interpret_util_1.argumentMap,
  unReturnList: interpret_util_1.argumentMap,
  patientVInfo: interpret_util_1.argumentMap,
  returnToStock: interpret_util_1.argumentMap,
  intercept: interpret_util_1.argumentMap,
  deleteById: interpret_util_1.argumentMap,
  listDrugReturn: interpret_util_1.argumentMap,
  listDrugReturnDetail: interpret_util_1.argumentMap,
  barCodeCancelDrugReturn: interpret_util_1.argumentMap,
  returnList: interpret_util_1.argumentMap,
  drugByBarCode: interpret_util_1.argumentMap,
  returnListNew: interpret_util_1.argumentMap,
};
function DrugReturnService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.DrugReturnService',
    version: '1.0.0',
    methods: exports.DrugReturnServiceWrapper,
  });
}
exports.DrugReturnService = DrugReturnService;
//generate by interpret-cli dubbo2.js
