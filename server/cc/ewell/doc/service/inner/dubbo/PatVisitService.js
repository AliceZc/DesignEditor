'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.PatVisitServiceWrapper = {
  queryPatientHomeByPatId: interpret_util_1.argumentMap,
  getInHospitalPatients: interpret_util_1.argumentMap,
  getPatientByDept: interpret_util_1.argumentMap,
  getPatientByWard: interpret_util_1.argumentMap,
  getPatVisitList: interpret_util_1.argumentMap,
};
function PatVisitService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.doc.service.inner.dubbo.PatVisitService',
    version: 'V-0.0.1',
    methods: exports.PatVisitServiceWrapper,
  });
}
exports.PatVisitService = PatVisitService;
//generate by interpret-cli dubbo2.js
