'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.PhysicsDictServiceWrapper = {
  queryPhysicsDictByItem: interpret_util_1.argumentMap,
  fuzzyQueryPhysicsItem: interpret_util_1.argumentMap,
  queryDischargeItem: interpret_util_1.argumentMap,
};
function PhysicsDictService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.PhysicsDictService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.PhysicsDictServiceWrapper,
  });
}
exports.PhysicsDictService = PhysicsDictService;
//generate by interpret-cli dubbo2.js
