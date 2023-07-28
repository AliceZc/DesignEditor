'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DocRequestServiceWrapper = {
  consumptionRequest: interpret_util_1.argumentMap,
  requestList: interpret_util_1.argumentMap,
  deleteDocRequestDetail: interpret_util_1.argumentMap,
  addDocRequestDetails: interpret_util_1.argumentMap,
  lowStockRequest: interpret_util_1.argumentMap,
  listDocRequestDetail: interpret_util_1.argumentMap,
  softDeleteDocRequest: interpret_util_1.argumentMap,
};
function DocRequestService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.DocRequestService',
    version: '1.0.0',
    methods: exports.DocRequestServiceWrapper,
  });
}
exports.DocRequestService = DocRequestService;
//generate by interpret-cli dubbo2.js
