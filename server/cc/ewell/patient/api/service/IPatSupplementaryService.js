'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPatSupplementaryServiceWrapper = {
  queryPatSupplementaryHistory: interpret_util_1.argumentMap,
  queryPatSupplementary: interpret_util_1.argumentMap,
  submitPatSupplementary: interpret_util_1.argumentMap,
};
function IPatSupplementaryService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IPatSupplementaryService',
    version: '1.0.0',
    methods: exports.IPatSupplementaryServiceWrapper,
  });
}
exports.IPatSupplementaryService = IPatSupplementaryService;
//generate by interpret-cli dubbo2.js
