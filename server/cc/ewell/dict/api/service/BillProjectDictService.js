'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.BillProjectDictServiceWrapper = {
  queryProjectByItemCode: interpret_util_1.argumentMap,
  queryAllProject: interpret_util_1.argumentMap,
};
function BillProjectDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.BillProjectDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.BillProjectDictServiceWrapper,
  });
}
exports.BillProjectDictService = BillProjectDictService;
//generate by interpret-cli dubbo2.js
