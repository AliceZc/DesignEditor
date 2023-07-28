'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IAdrServiceWrapper = {
  queryAdrDict: interpret_util_1.argumentMap,
  historyQuery: interpret_util_1.argumentMap,
  insertPatAdr: interpret_util_1.argumentMap,
  modifyPatAdr: interpret_util_1.argumentMap,
  queryPatAdr: interpret_util_1.argumentMap,
  deletePatAdr: interpret_util_1.argumentMap,
};
function IAdrService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IAdrService',
    version: '1.0.0',
    methods: exports.IAdrServiceWrapper,
  });
}
exports.IAdrService = IAdrService;
//generate by interpret-cli dubbo2.js
