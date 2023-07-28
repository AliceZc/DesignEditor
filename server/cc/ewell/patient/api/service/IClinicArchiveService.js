'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IClinicArchiveServiceWrapper = {
  deleteClinicArchive: interpret_util_1.argumentMap,
  addClinicArchiveDetail: interpret_util_1.argumentMap,
  searchClinicalPhotoDetail: interpret_util_1.argumentMap,
  searchClinicArchiveDetail: interpret_util_1.argumentMap,
  saveClinicArchive: interpret_util_1.argumentMap,
  deleteClinicArchiveDetail: interpret_util_1.argumentMap,
  addClinicArchiveDetailByArchiveNo: interpret_util_1.argumentMap,
  updateClinicArchiveDetail: interpret_util_1.argumentMap,
  searchClinicArchive: interpret_util_1.argumentMap,
  addClinicArchiveDetailOneNo: interpret_util_1.argumentMap,
};
function IClinicArchiveService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IClinicArchiveService',
    version: '1.0.0',
    methods: exports.IClinicArchiveServiceWrapper,
  });
}
exports.IClinicArchiveService = IClinicArchiveService;
//generate by interpret-cli dubbo2.js
