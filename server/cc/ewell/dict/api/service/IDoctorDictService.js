'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDoctorDictServiceWrapper = {
  queryAllDoctors: interpret_util_1.argumentMap,
  queryDoctor: interpret_util_1.argumentMap,
};
function IDoctorDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IDoctorDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IDoctorDictServiceWrapper,
  });
}
exports.IDoctorDictService = IDoctorDictService;
//generate by interpret-cli dubbo2.js
