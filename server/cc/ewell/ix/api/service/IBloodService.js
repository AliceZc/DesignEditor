'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IBloodServiceWrapper = {
  queryBlood: interpret_util_1.argumentMap,
  addBlood: interpret_util_1.argumentMap,
  editBloodRec: interpret_util_1.argumentMap,
  deleteBloodRec: interpret_util_1.argumentMap,
  queryBloodList: interpret_util_1.argumentMap,
  addBloodSampling: interpret_util_1.argumentMap,
  queryLastBloodSamplingInfo: interpret_util_1.argumentMap,
  queryLastBloodPackageInfo: interpret_util_1.argumentMap,
  queryBloodSamplingList: interpret_util_1.argumentMap,
  queryLastLabRecInfo: interpret_util_1.argumentMap,
  editBloodSampling: interpret_util_1.argumentMap,
  deleteBloodSampling: interpret_util_1.argumentMap,
  queryPackageChangeMessage: interpret_util_1.argumentMap,
  queryAllBloodPackageList: interpret_util_1.argumentMap,
  queryAllBloodSamplingList: interpret_util_1.argumentMap,
  queryAllBloodSamplingListByEmployee: interpret_util_1.argumentMap,
  updateBloodSamplingRec: interpret_util_1.argumentMap,
  updateBloodPackageStatus: interpret_util_1.argumentMap,
  queryStaffCodesByPatient: interpret_util_1.argumentMap,
  queryPatientCountByStaffCode: interpret_util_1.argumentMap,
  queryBloodDataAndPatientCountByStaffCode: interpret_util_1.argumentMap,
  check: interpret_util_1.argumentMap,
  queryIpBloodList: interpret_util_1.argumentMap,
  queryBloodSamplingPrintForm: interpret_util_1.argumentMap,
  queryReturnBloodPrintForm: interpret_util_1.argumentMap,
  addMbtBlood: interpret_util_1.argumentMap,
  listNeedAcknowledgeMbtBlood: interpret_util_1.argumentMap,
  listNotAcknowledgeMbtBloodOfPatient: interpret_util_1.argumentMap,
  queryMbtBloodForm: interpret_util_1.argumentMap,
  selectBloodVerbalOrderList: interpret_util_1.argumentMap,
  bloodVerbalOrderaExcel: interpret_util_1.argumentMap,
  bloodVerbalOrderaTotol: interpret_util_1.argumentMap,
};
function IBloodService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.ix.api.service.IBloodService',
    version: '1.0.0',
    methods: exports.IBloodServiceWrapper,
  });
}
exports.IBloodService = IBloodService;
//generate by interpret-cli dubbo2.js
