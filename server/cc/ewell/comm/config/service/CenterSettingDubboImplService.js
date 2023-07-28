'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.CenterSettingDubboImplServiceWrapper = {
  changeGeneralLocation: interpret_util_1.argumentMap,
};
function CenterSettingDubboImplService(dubbo) {
  return dubbo.proxyService({
    dubboInterface:
      'cc.ewell.comm.config.service.dubbo.impl.CenterSettingDubboServiceImpl',
    version: '1.0.0',
    methods: exports.CenterSettingDubboImplServiceWrapper,
  });
}
exports.CenterSettingDubboImplService = CenterSettingDubboImplService;
//generate by interpret-cli dubbo2.js
