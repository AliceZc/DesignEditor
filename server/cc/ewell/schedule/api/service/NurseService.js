'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.NurseServiceWrapper = {
  queryPMNLocationsAndSum: interpret_util_1.argumentMap,
  PMNList: interpret_util_1.argumentMap,
  queryNurseDetail: interpret_util_1.argumentMap,
  nurseListByPage: interpret_util_1.argumentMap,
  getRosterNurseList: interpret_util_1.argumentMap,
};
function NurseService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.schedule.api.service.NurseService',
    version: '1.0.0',
    methods: exports.NurseServiceWrapper,
  });
}
exports.NurseService = NurseService;
//generate by interpret-cli dubbo2.js
