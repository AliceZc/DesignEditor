'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IPackageServiceWrapper = {
  queryPatPackage: interpret_util_1.argumentMap,
  addPackage: interpret_util_1.argumentMap,
  queryPackageList: interpret_util_1.argumentMap,
  queryPackage: interpret_util_1.argumentMap,
  deletePackage: interpret_util_1.argumentMap,
  modifyPackage: interpret_util_1.argumentMap,
};
function IPackageService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.basic.api.service.IPackageService',
    version: '1.0.0',
    methods: exports.IPackageServiceWrapper,
  });
}
exports.IPackageService = IPackageService;
//generate by interpret-cli dubbo2.js
