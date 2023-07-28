'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.RosterDetailServiceWrapper = {
  getNurseRosterByTime: interpret_util_1.argumentMap,
};
function RosterDetailService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.schedule.api.service.RosterDetailService',
    version: '1.0.0',
    methods: exports.RosterDetailServiceWrapper,
  });
}
exports.RosterDetailService = RosterDetailService;
//generate by interpret-cli dubbo2.js
