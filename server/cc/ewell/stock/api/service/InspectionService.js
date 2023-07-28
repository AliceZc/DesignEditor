'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.InspectionServiceWrapper = {
  inspectionList: interpret_util_1.argumentMap,
  inspectionDetail: interpret_util_1.argumentMap,
  inspectionAdd: interpret_util_1.argumentMap,
};
function InspectionService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.InspectionService',
    version: '1.0.0',
    methods: exports.InspectionServiceWrapper,
  });
}
exports.InspectionService = InspectionService;
//generate by interpret-cli dubbo2.js
