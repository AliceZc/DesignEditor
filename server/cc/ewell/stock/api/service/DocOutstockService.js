'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DocOutstockServiceWrapper = {
  listDocOutstockDetail: interpret_util_1.argumentMap,
  softDeleteDocOutstock: interpret_util_1.argumentMap,
  deleteDocOutstockDetail: interpret_util_1.argumentMap,
  addDocOutstockDetails: interpret_util_1.argumentMap,
  listDocOutstockByPage: interpret_util_1.argumentMap,
};
function DocOutstockService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.DocOutstockService',
    version: '1.0.0',
    methods: exports.DocOutstockServiceWrapper,
  });
}
exports.DocOutstockService = DocOutstockService;
//generate by interpret-cli dubbo2.js
