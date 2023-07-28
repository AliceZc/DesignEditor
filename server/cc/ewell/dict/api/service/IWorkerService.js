'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IWorkerServiceWrapper = {
  queryWorder: interpret_util_1.argumentMap,
  queryWorkerAccount: interpret_util_1.argumentMap,
};
function IWorkerService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.infra.IWorkerService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IWorkerServiceWrapper,
  });
}
exports.IWorkerService = IWorkerService;
//generate by interpret-cli dubbo2.js
