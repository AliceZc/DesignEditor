'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOperationPatientServiceWrapper = {
  queryInpatientList: interpret_util_1.argumentMap,
};
function IOperationPatientService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.IOperationPatientService',
    version: '1.0.0',
    methods: exports.IOperationPatientServiceWrapper,
  });
}
exports.IOperationPatientService = IOperationPatientService;
//generate by interpret-cli dubbo2.js
