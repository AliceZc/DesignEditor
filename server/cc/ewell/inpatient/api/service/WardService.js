'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.WardServiceWrapper = {
  listWards: interpret_util_1.argumentMap,
  getWardGroups: interpret_util_1.argumentMap,
};
function WardService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.inpatient.api.service.WardService',
    methods: exports.WardServiceWrapper,
  });
}
exports.WardService = WardService;
//generate by interpret-cli dubbo2.js
