'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.DictWebWrapper = {
  getDicts: interpret_util_1.argumentMap,
  textEncodingConversion: interpret_util_1.argumentMap,
  getDistrictAndSubDistrictByCountryCode: interpret_util_1.argumentMap,
};
function DictWeb(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.pms.dict.web.DictWeb',
    methods: exports.DictWebWrapper,
    version: '1.0.0',
  });
}
exports.DictWeb = DictWeb;
//generate by interpret-cli dubbo2.js
