'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IHolidaysServiceWrapper = {
  queryHolidays: interpret_util_1.argumentMap,
};
function IHolidaysService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.dict.api.service.infra.IHolidaysService',
    version: '1.0.0',
    group: 'EMR',
    methods: exports.IHolidaysServiceWrapper,
  });
}
exports.IHolidaysService = IHolidaysService;
//generate by interpret-cli dubbo2.js
