'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IDrugStoreFromNurseServiceWrapper = {
  pushPatAdviceExtDTOList: interpret_util_1.argumentMap,
  pushPatAdviceExtDTOListToRocketMQ: interpret_util_1.argumentMap,
  orderExeRecPatchCallBack: interpret_util_1.argumentMap,
};
function IDrugStoreFromNurseService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.moe.api.service.IDrugStoreFromNurseService',
    version: '1.0.0',
    methods: exports.IDrugStoreFromNurseServiceWrapper,
  });
}
exports.IDrugStoreFromNurseService = IDrugStoreFromNurseService;
//generate by interpret-cli dubbo2.js
