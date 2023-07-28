'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IAudiologyRecServiceWrapper = {
  addAudiology: interpret_util_1.argumentMap,
  audiologyList: interpret_util_1.argumentMap,
  audiologyItemDetail: interpret_util_1.argumentMap,
  editAudiologyItem: interpret_util_1.argumentMap,
  deleteAudiologyItem: interpret_util_1.argumentMap,
  cancelAudiologyItem: interpret_util_1.argumentMap,
};
function IAudiologyRecService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.ix.api.service.IAudiologyRecService',
    version: '1.0.0',
    methods: exports.IAudiologyRecServiceWrapper,
  });
}
exports.IAudiologyRecService = IAudiologyRecService;
//generate by interpret-cli dubbo2.js
