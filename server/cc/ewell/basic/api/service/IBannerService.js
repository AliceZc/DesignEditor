'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IBannerServiceWrapper = {
  createBanner: interpret_util_1.argumentMap,
  queryBannerList: interpret_util_1.argumentMap,
  deleteBannerById: interpret_util_1.argumentMap,
  changeBannerStatusById: interpret_util_1.argumentMap,
  timeIsLegal: interpret_util_1.argumentMap,
  updateBannerById: interpret_util_1.argumentMap,
};
function IBannerService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.basic.api.service.IBannerService',
    version: '1.0.0',
    methods: exports.IBannerServiceWrapper,
  });
}
exports.IBannerService = IBannerService;
//generate by interpret-cli dubbo2.js
