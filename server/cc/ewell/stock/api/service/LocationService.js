'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.LocationServiceWrapper = {
  locationList: interpret_util_1.argumentMap,
  addLocationList: interpret_util_1.argumentMap,
  deleteById: interpret_util_1.argumentMap,
  inventoryLocationList: interpret_util_1.argumentMap,
  allLocationList: interpret_util_1.argumentMap,
  localtionInfo: interpret_util_1.argumentMap,
};
function LocationService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.stock.api.service.LocationService',
    version: '1.0.0',
    methods: exports.LocationServiceWrapper,
  });
}
exports.LocationService = LocationService;
//generate by interpret-cli dubbo2.js
