'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IADCConfirmRecServiceWrapper = {
  addADCConformOrder: interpret_util_1.argumentMap,
  release: interpret_util_1.argumentMap,
};
function IADCConfirmRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IADCConfirmRecService',
    version: '1.0.0',
    methods: exports.IADCConfirmRecServiceWrapper,
  });
}
exports.IADCConfirmRecService = IADCConfirmRecService;
//generate by interpret-cli dubbo2.js
