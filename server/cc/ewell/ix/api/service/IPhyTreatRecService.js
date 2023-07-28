'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPhyTreatRecServiceWrapper = {
  insertPhysics: interpret_util_1.argumentMap,
  physicsList: interpret_util_1.argumentMap,
  queryPhysics: interpret_util_1.argumentMap,
  deletePhysics: interpret_util_1.argumentMap,
  editPhysics: interpret_util_1.argumentMap,
};
function IPhyTreatRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.ix.api.service.IPhyTreatRecService',
    version: '1.0.0',
    methods: exports.IPhyTreatRecServiceWrapper,
  });
}
exports.IPhyTreatRecService = IPhyTreatRecService;
//generate by interpret-cli dubbo2.js
