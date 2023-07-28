'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDiagnosisDictServiceWrapper = {
  queryDiagnosisDict: interpret_util_1.argumentMap,
};
function IDiagnosisDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IDiagnosisDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IDiagnosisDictServiceWrapper,
  });
}
exports.IDiagnosisDictService = IDiagnosisDictService;
//generate by interpret-cli dubbo2.js
