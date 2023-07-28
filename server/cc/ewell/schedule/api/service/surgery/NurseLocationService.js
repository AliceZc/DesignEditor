'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.NurseLocationServiceWrapper = {
  getNurseListByLocation: interpret_util_1.argumentMap,
};
function NurseLocationService(dubbo) {
  return dubbo.proxyService({
    dubboInterface:
      'cc.ewell.schedule.api.service.surgery.NurseLocationService',
    version: '1.0.0',
    methods: exports.NurseLocationServiceWrapper,
  });
}
exports.NurseLocationService = NurseLocationService;
//generate by interpret-cli dubbo2.js
