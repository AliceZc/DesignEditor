'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IAmpAttributesServiceWrapper = {
  addOne: interpret_util_1.argumentMap,
  deleteByAmpCodes: interpret_util_1.argumentMap,
  updateOneByPrimaryKey: interpret_util_1.argumentMap,
  selectOneByAmpCode: interpret_util_1.argumentMap,
};
function IAmpAttributesService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.drugKnowledge.api.service.IAmpAttributesService',
    version: '1.0.0',
    methods: exports.IAmpAttributesServiceWrapper,
  });
}
exports.IAmpAttributesService = IAmpAttributesService;
//generate by interpret-cli dubbo2.js
