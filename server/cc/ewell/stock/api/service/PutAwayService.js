'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.PutAwayServiceWrapper = {
  putAwayAdd: interpret_util_1.argumentMap,
  putAwayDetail: interpret_util_1.argumentMap,
  putAwayList: interpret_util_1.argumentMap,
};
function PutAwayService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.PutAwayService',
    version: '1.0.0',
    methods: exports.PutAwayServiceWrapper,
  });
}
exports.PutAwayService = PutAwayService;
//generate by interpret-cli dubbo2.js
