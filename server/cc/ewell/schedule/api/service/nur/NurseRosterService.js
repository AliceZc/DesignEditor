'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.NurseRosterServiceWrapper = {
  getShiftListByLocation: interpret_util_1.argumentMap,
  getRosterNurseList: interpret_util_1.argumentMap,
};
function NurseRosterService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.schedule.api.service.nur.NurseRosterService',
    version: '1.0.0',
    methods: exports.NurseRosterServiceWrapper,
  });
}
exports.NurseRosterService = NurseRosterService;
//generate by interpret-cli dubbo2.js
