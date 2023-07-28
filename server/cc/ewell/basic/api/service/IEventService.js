'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IEventServiceWrapper = {
  queryEventByDate: interpret_util_1.argumentMap,
  queryEventDate: interpret_util_1.argumentMap,
};
function IEventService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.basic.api.service.IEventService',
    version: '1.0.0',
    methods: exports.IEventServiceWrapper,
  });
}
exports.IEventService = IEventService;
//generate by interpret-cli dubbo2.js
