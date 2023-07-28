'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOperationBookingServiceWrapper = {
  addOtBookingToPublishTable: interpret_util_1.argumentMap,
  queryOtBookingByBookingId: interpret_util_1.argumentMap,
  addQuery: interpret_util_1.argumentMap,
  listOtBooking: interpret_util_1.argumentMap,
  updateOtBooking: interpret_util_1.argumentMap,
  cancelOtBooking: interpret_util_1.argumentMap,
  listQuery: interpret_util_1.argumentMap,
  scanPatStrap: interpret_util_1.argumentMap,
  saveQueryResponse: interpret_util_1.argumentMap,
  queryOtBookingList: interpret_util_1.argumentMap,
  getOperationBookingData: interpret_util_1.argumentMap,
  queryValidOtBooking: interpret_util_1.argumentMap,
  mockAisStatus: interpret_util_1.argumentMap,
  queryPatientByOperation: interpret_util_1.argumentMap,
  addLDCOtBooking: interpret_util_1.argumentMap,
  queryInProcessBooking: interpret_util_1.argumentMap,
};
function IOperationBookingService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.surgery.api.service.IOperationBookingService',
    version: '1.0.0',
    methods: exports.IOperationBookingServiceWrapper,
  });
}
exports.IOperationBookingService = IOperationBookingService;
//generate by interpret-cli dubbo2.js
