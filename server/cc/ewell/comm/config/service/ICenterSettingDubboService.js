'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.ICenterSettingDubboServiceWrapper = {
  queryLocations: interpret_util_1.argumentMap,
  saveLocation: interpret_util_1.argumentMap,
  queryZoneList: interpret_util_1.argumentMap,
  saveZoneSetting: interpret_util_1.argumentMap,
  queryActivityList: interpret_util_1.argumentMap,
  saveActivitySetting: interpret_util_1.argumentMap,
  queryLocationDict: interpret_util_1.argumentMap,
  queryServiceList: interpret_util_1.argumentMap,
  saveServiceSetting: interpret_util_1.argumentMap,
  queryActivities: interpret_util_1.argumentMap,
  queryOperatorTimeData: interpret_util_1.argumentMap,
  saveServiceOpenTime: interpret_util_1.argumentMap,
  queryServices: interpret_util_1.argumentMap,
  queryServiceDetail: interpret_util_1.argumentMap,
  queryActivityNature: interpret_util_1.argumentMap,
  queryDutyAssignmentData: interpret_util_1.argumentMap,
  queryDefaultOpenTime: interpret_util_1.argumentMap,
  saveDefaultOpenTime: interpret_util_1.argumentMap,
  checkNameDuplicate: interpret_util_1.argumentMap,
  queryServiceAndLocation: interpret_util_1.argumentMap,
  queryServiceSettingByDate: interpret_util_1.argumentMap,
  queryActivityTypeByCentreCode: interpret_util_1.argumentMap,
  changeServiceStatus: interpret_util_1.argumentMap,
  changeGeneralLocation: interpret_util_1.argumentMap,
};
function ICenterSettingDubboService(dubbo) {
  return dubbo.proxyService({
    dubboInterface:
      'cc.ewell.comm.config.service.dubbo.ICenterSettingDubboService',
    version: '1.0.0',
    methods: exports.ICenterSettingDubboServiceWrapper,
  });
}
exports.ICenterSettingDubboService = ICenterSettingDubboService;
//generate by interpret-cli dubbo2.js
