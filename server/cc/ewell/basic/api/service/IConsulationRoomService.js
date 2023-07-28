'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IConsulationRoomServiceWrapper = {
  queryScheduleList: interpret_util_1.argumentMap,
  addConsultationRoom: interpret_util_1.argumentMap,
  queryConsulationList: interpret_util_1.argumentMap,
  queryNurseScheduleList: interpret_util_1.argumentMap,
  addMealTime: interpret_util_1.argumentMap,
};
function IConsulationRoomService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.basic.api.service.IConsulationRoomService',
    version: '1.0.0',
    methods: exports.IConsulationRoomServiceWrapper,
  });
}
exports.IConsulationRoomService = IConsulationRoomService;
//generate by interpret-cli dubbo2.js
