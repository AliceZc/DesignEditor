'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.MedTempTransServiceWrapper = {
  getTransInfoByInvisitID: interpret_util_1.argumentMap,
  saveNTempList: interpret_util_1.argumentMap,
  saveITempList: interpret_util_1.argumentMap,
  getNTempListByCZYDept: interpret_util_1.argumentMap,
  saveTransInfo: interpret_util_1.argumentMap,
  getITempListByCZYDept: interpret_util_1.argumentMap,
};
function MedTempTransService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.doc.service.inner.dubbo.MedTempTransService',
    version: 'V-0.0.1',
    methods: exports.MedTempTransServiceWrapper,
  });
}
exports.MedTempTransService = MedTempTransService;
//generate by interpret-cli dubbo2.js
