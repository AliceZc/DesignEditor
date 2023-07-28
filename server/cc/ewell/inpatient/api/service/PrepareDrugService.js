'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.PrepareDrugServiceWrapper = {
  savePrepareDrug: interpret_util_1.argumentMap,
  getLabelModuleByCode: interpret_util_1.argumentMap,
  listPrepareDrug: interpret_util_1.argumentMap,
};
function PrepareDrugService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.inpatient.api.service.PrepareDrugService',
    methods: exports.PrepareDrugServiceWrapper,
  });
}
exports.PrepareDrugService = PrepareDrugService;
//generate by interpret-cli dubbo2.js
