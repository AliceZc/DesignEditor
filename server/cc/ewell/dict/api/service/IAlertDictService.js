'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IAlertDictServiceWrapper = {
  searchAlertName: interpret_util_1.argumentMap,
  queryAll: interpret_util_1.argumentMap,
};
function IAlertDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IAlertDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IAlertDictServiceWrapper,
  });
}
exports.IAlertDictService = IAlertDictService;
//generate by interpret-cli dubbo2.js
