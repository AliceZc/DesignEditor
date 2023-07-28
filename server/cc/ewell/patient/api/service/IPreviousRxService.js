'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPreviousRxServiceWrapper = {
  getListHisClinicRec: interpret_util_1.argumentMap,
  listHisClinicRec: interpret_util_1.argumentMap,
};
function IPreviousRxService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.patient.api.service.IPreviousRxService',
    version: '1.0.0',
    methods: exports.IPreviousRxServiceWrapper,
  });
}
exports.IPreviousRxService = IPreviousRxService;
//generate by interpret-cli dubbo2.js
