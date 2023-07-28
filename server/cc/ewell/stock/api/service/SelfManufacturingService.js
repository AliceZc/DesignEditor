'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.SelfManufacturingServiceWrapper = {
  deleteSelfManuDetail: interpret_util_1.argumentMap,
  patientOrderNo: interpret_util_1.argumentMap,
  selfManuData: interpret_util_1.argumentMap,
  selfManuOverUse: interpret_util_1.argumentMap,
  selfManuDetail: interpret_util_1.argumentMap,
  selfManuList: interpret_util_1.argumentMap,
  selfManuDataDetail: interpret_util_1.argumentMap,
  addSelfManu: interpret_util_1.argumentMap,
  selfManuJobFinalInfo: interpret_util_1.argumentMap,
};
function SelfManufacturingService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.SelfManufacturingService',
    version: '1.0.0',
    methods: exports.SelfManufacturingServiceWrapper,
  });
}
exports.SelfManufacturingService = SelfManufacturingService;
//generate by interpret-cli dubbo2.js
