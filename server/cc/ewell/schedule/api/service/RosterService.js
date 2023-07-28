'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.RosterServiceWrapper = {
  rosterNurseList: interpret_util_1.argumentMap,
  saveRoster: interpret_util_1.argumentMap,
  queryNurseRoster: interpret_util_1.argumentMap,
};
function RosterService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.schedule.api.service.RosterService',
    version: '1.0.0',
    methods: exports.RosterServiceWrapper,
  });
}
exports.RosterService = RosterService;
//generate by interpret-cli dubbo2.js
