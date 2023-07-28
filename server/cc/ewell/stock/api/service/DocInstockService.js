'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DocInstockServiceWrapper = {
  logicDeleteDocInstockDetail: interpret_util_1.argumentMap,
  addDocInstockDetails: interpret_util_1.argumentMap,
  scanOut: interpret_util_1.argumentMap,
  listDocInstockDetail: interpret_util_1.argumentMap,
  listDocInstockByPage: interpret_util_1.argumentMap,
  softDeleteDocInstock: interpret_util_1.argumentMap,
};
function DocInstockService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.DocInstockService',
    version: '1.0.0',
    methods: exports.DocInstockServiceWrapper,
  });
}
exports.DocInstockService = DocInstockService;
//generate by interpret-cli dubbo2.js
