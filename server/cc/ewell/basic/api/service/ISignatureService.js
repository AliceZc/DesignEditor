'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ISignatureServiceWrapper = {
  queryAllSignature: interpret_util_1.argumentMap,
  updateSignatureById: interpret_util_1.argumentMap,
  deleteSignatureById: interpret_util_1.argumentMap,
};
function ISignatureService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.basic.api.service.ISignatureService',
    version: '1.0.0',
    methods: exports.ISignatureServiceWrapper,
  });
}
exports.ISignatureService = ISignatureService;
//generate by interpret-cli dubbo2.js
