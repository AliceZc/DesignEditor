'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IBillProjectDictServiceWrapper = {
  queryProjectByName: interpret_util_1.argumentMap,
  queryProjectByItemCode: interpret_util_1.argumentMap,
  queryAllProject: interpret_util_1.argumentMap,
};
function IBillProjectDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.IBillProjectDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IBillProjectDictServiceWrapper,
  });
}
exports.IBillProjectDictService = IBillProjectDictService;
//generate by interpret-cli dubbo2.js
