'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IEmrServiceWrapper = {
  queryOrderRecList: interpret_util_1.argumentMap,
  dealEyeOrder: interpret_util_1.argumentMap,
  queryMedicationListHistoryByConditionForShow: interpret_util_1.argumentMap,
  queryMedicationListByConditionForShow: interpret_util_1.argumentMap,
};
function IEmrService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.emr.IEmrService',
    version: '1.0.0',
    methods: exports.IEmrServiceWrapper,
  });
}
exports.IEmrService = IEmrService;
//generate by interpret-cli dubbo2.js
