'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IOrderTemplateServiceWrapper = {
  addOrderTemplateDetail: interpret_util_1.argumentMap,
  searchOrderTemplateDetail: interpret_util_1.argumentMap,
  deleteOrderTemplateDetail: interpret_util_1.argumentMap,
  deleteOrderTemplate: interpret_util_1.argumentMap,
  searchOrderTemplate: interpret_util_1.argumentMap,
  saveOrderTemplate: interpret_util_1.argumentMap,
  updateOrderTemplateDetail: interpret_util_1.argumentMap,
  submitOrderTemplateDetail: interpret_util_1.argumentMap,
  updateVaccineOrderTemplateDetail: interpret_util_1.argumentMap,
  addOtherOrderTemplate: interpret_util_1.argumentMap,
  checkOrderTemplate: interpret_util_1.argumentMap,
  copyOrderTemplate: interpret_util_1.argumentMap,
};
function IOrderTemplateService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IOrderTemplateService',
    version: '1.0.0',
    methods: exports.IOrderTemplateServiceWrapper,
  });
}
exports.IOrderTemplateService = IOrderTemplateService;
//generate by interpret-cli dubbo2.js
