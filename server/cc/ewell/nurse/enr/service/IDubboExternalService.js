'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDubboExternalServiceWrapper = {
  queryScoreAssessment: interpret_util_1.argumentMap,
  queryChemoList: interpret_util_1.argumentMap,
};
function IDubboExternalService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.nurse.enr.service.IDubboExternalService',
    version: '1.0.0',
    methods: exports.IDubboExternalServiceWrapper,
  });
}
exports.IDubboExternalService = IDubboExternalService;
//generate by interpret-cli dubbo2.js
