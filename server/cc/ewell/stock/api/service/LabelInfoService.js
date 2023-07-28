'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.LabelInfoServiceWrapper = {
  labelInfo: interpret_util_1.argumentMap,
  generateProductLabel: interpret_util_1.argumentMap,
  gsLabelDecode: interpret_util_1.argumentMap,
  labelInfoNoType: interpret_util_1.argumentMap,
  ampInfo: interpret_util_1.argumentMap,
  gsLabelEncode: interpret_util_1.argumentMap,
};
function LabelInfoService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.LabelInfoService',
    version: '1.0.0',
    methods: exports.LabelInfoServiceWrapper,
  });
}
exports.LabelInfoService = LabelInfoService;
//generate by interpret-cli dubbo2.js
