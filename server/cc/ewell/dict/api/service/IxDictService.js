'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IxDictServiceWrapper = {
  queryIxDictByName: interpret_util_1.argumentMap,
  queryIxDict: interpret_util_1.argumentMap,
  testDict: interpret_util_1.argumentMap,
  queryIxByClassOther: interpret_util_1.argumentMap,
  queryAllIxByClass: interpret_util_1.argumentMap,
  queryIxByClass: interpret_util_1.argumentMap,
  queryRadiologyDictByItem: interpret_util_1.argumentMap,
  queryLabDictByItem: interpret_util_1.argumentMap,
  queryPhysicsDictByItem: interpret_util_1.argumentMap,
  queryItemSpecimen: interpret_util_1.argumentMap,
  fuzzyQueryLabItem: interpret_util_1.argumentMap,
  fuzzyQueryRadiologyItem: interpret_util_1.argumentMap,
  fuzzyQueryPhysicsItem: interpret_util_1.argumentMap,
  queryDischargeItem: interpret_util_1.argumentMap,
  queryEyeDictByItem: interpret_util_1.argumentMap,
  queryRadiologyComboInfo: interpret_util_1.argumentMap,
  queryRadiologyMedicalHistory: interpret_util_1.argumentMap,
};
function IxDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IxDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IxDictServiceWrapper,
  });
}
exports.IxDictService = IxDictService;
//generate by interpret-cli dubbo2.js
