'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOtConfigServiceWrapper = {
  queryOtFeatureConfig: interpret_util_1.argumentMap,
};
function IOtConfigService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.infra.IOtConfigService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IOtConfigServiceWrapper,
  });
}
exports.IOtConfigService = IOtConfigService;
//generate by interpret-cli dubbo2.js
