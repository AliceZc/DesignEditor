'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOpPatientListServiceWrapper = {
  queryIncomingPatList: interpret_util_1.argumentMap,
  opCheckIn: interpret_util_1.argumentMap,
  queryCurrentList: interpret_util_1.argumentMap,
  queryCheckedoutList: interpret_util_1.argumentMap,
};
function IOpPatientListService(dubbo) {
  return dubbo.proxyService({
    dubboInterface:
      'cc.ewell.pas.pat.service.dubbo.internal.IOpPatientListService',
    methods: exports.IOpPatientListServiceWrapper,
    version: '1.0.0',
  });
}
exports.IOpPatientListService = IOpPatientListService;
//generate by interpret-cli dubbo2.js
