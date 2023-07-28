'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.TransferServiceWrapper = {
  transferNurse: interpret_util_1.argumentMap,
  checkTransferTime: interpret_util_1.argumentMap,
  transferHistoryByNurseId: interpret_util_1.argumentMap,
};
function TransferService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.schedule.api.service.TransferService',
    version: '1.0.0',
    methods: exports.TransferServiceWrapper,
  });
}
exports.TransferService = TransferService;
//generate by interpret-cli dubbo2.js
