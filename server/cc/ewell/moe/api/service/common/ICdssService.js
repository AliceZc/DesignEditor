'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ICdssServiceWrapper = {
  fdbCodeCheck: interpret_util_1.argumentMap,
  fdbCodeListCheck: interpret_util_1.argumentMap,
  listCdssCheckRec: interpret_util_1.argumentMap,
  listCdssCheckRecGroupByOrderNo: interpret_util_1.argumentMap,
  listCdssCheckRecByOrderNo: interpret_util_1.argumentMap,
  checkDrug: interpret_util_1.argumentMap,
  confirmCdssCheckInfo: interpret_util_1.argumentMap,
  endForCdss: interpret_util_1.argumentMap,
  discontinueForCdss: interpret_util_1.argumentMap,
  deleteForCdss: interpret_util_1.argumentMap,
  closeForCdss: interpret_util_1.argumentMap,
  patchCheckCdssByPatient: interpret_util_1.argumentMap,
  OpDrugAdminCheckCdssByVisitNo: interpret_util_1.argumentMap,
  overriderCdssOrder: interpret_util_1.argumentMap,
  listCdssCheckRecStatusByOrderGroupNo: interpret_util_1.argumentMap,
  doNotPrescribeForCdss: interpret_util_1.argumentMap,
};
function ICdssService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.common.ICdssService',
    version: '1.0.0',
    methods: exports.ICdssServiceWrapper,
  });
}
exports.ICdssService = ICdssService;
//generate by interpret-cli dubbo2.js
