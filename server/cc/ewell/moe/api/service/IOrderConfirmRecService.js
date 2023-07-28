'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOrderConfirmRecServiceWrapper = {
  updateNurseConfirmStatus: interpret_util_1.argumentMap,
  queryNurseConfirmStatusRecByPatient: interpret_util_1.argumentMap,
  deleteNurseConfirmStatus: interpret_util_1.argumentMap,
  insertNurseConfirmStatus: interpret_util_1.argumentMap,
  updateNurseConfirmNewToSubmit: interpret_util_1.argumentMap,
  queryVerbalOrderConfirmRec: interpret_util_1.argumentMap,
};
function IOrderConfirmRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IOrderConfirmRecService',
    version: '1.0.0',
    methods: exports.IOrderConfirmRecServiceWrapper,
  });
}
exports.IOrderConfirmRecService = IOrderConfirmRecService;
//generate by interpret-cli dubbo2.js
