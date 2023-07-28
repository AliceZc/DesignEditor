'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IAllergyServiceWrapper = {
  deleteAllergy: interpret_util_1.argumentMap,
  serachAllergy: interpret_util_1.argumentMap,
  queryAllergy: interpret_util_1.argumentMap,
  insertAllergy: interpret_util_1.argumentMap,
  historyQuery: interpret_util_1.argumentMap,
  modifyAllergy: interpret_util_1.argumentMap,
};
function IAllergyService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IAllergyService',
    version: '1.0.0',
    methods: exports.IAllergyServiceWrapper,
  });
}
exports.IAllergyService = IAllergyService;
//generate by interpret-cli dubbo2.js
