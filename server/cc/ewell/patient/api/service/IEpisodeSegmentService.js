'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IEpisodeSegmentServiceWrapper = {
  queryEpisodeSegmentList: interpret_util_1.argumentMap,
  saveEpisodeSegment: interpret_util_1.argumentMap,
  deleteEpisodeSegment: interpret_util_1.argumentMap,
  endEpisodeSegment: interpret_util_1.argumentMap,
  updateEpisodeSegmentLogId: interpret_util_1.argumentMap,
  queryLogPatientList: interpret_util_1.argumentMap,
  ackLogPatient: interpret_util_1.argumentMap,
  updateEpisodeSegmentDiscount: interpret_util_1.argumentMap,
  checkLogNoCanBind: interpret_util_1.argumentMap,
  querySegmentViewDxPxInfos: interpret_util_1.argumentMap,
  queryPackageByBudgetEstimateCode: interpret_util_1.argumentMap,
  queryLastEpisodeSegment: interpret_util_1.argumentMap,
};
function IEpisodeSegmentService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IEpisodeSegmentService',
    version: '1.0.0',
    methods: exports.IEpisodeSegmentServiceWrapper,
  });
}
exports.IEpisodeSegmentService = IEpisodeSegmentService;
//generate by interpret-cli dubbo2.js
