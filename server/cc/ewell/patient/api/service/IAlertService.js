'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IAlertServiceWrapper = {
  searchAlertDict: interpret_util_1.argumentMap,
  insertPatAlert: interpret_util_1.argumentMap,
  queryAlert: interpret_util_1.argumentMap,
  historyQuery: interpret_util_1.argumentMap,
  modifyPatAlert: interpret_util_1.argumentMap,
  deletePatAlert: interpret_util_1.argumentMap,
};
function IAlertService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IAlertService',
    version: '1.0.0',
    methods: exports.IAlertServiceWrapper,
  });
}
exports.IAlertService = IAlertService;
//generate by interpret-cli dubbo2.js
