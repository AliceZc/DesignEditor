'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.BedWebServiceWrapper = {
  queryWardList: interpret_util_1.argumentMap,
  queryWardDisplay: interpret_util_1.argumentMap,
  saveWard: interpret_util_1.argumentMap,
  queryWardOperationLog: interpret_util_1.argumentMap,
};
function BedWebService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.pas.service.dubbo.BedWebService',
    methods: exports.BedWebServiceWrapper,
    version: '1.0.0',
  });
}
exports.BedWebService = BedWebService;
//generate by interpret-cli dubbo2.js
