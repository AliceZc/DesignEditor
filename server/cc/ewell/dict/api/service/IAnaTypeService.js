'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IAnaTypeServiceWrapper = {
  queryAnaTypeDict: interpret_util_1.argumentMap,
};
function IAnaTypeService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.infra.IAnaTypeService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IAnaTypeServiceWrapper,
  });
}
exports.IAnaTypeService = IAnaTypeService;
//generate by interpret-cli dubbo2.js
