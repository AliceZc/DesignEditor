'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IVtmMasteServiceWrapper = {
  listParenteralRoute: interpret_util_1.argumentMap,
  commonDict: interpret_util_1.argumentMap,
  listBNF: interpret_util_1.argumentMap,
  listVmpItemDosage: interpret_util_1.argumentMap,
  listFluidDosage: interpret_util_1.argumentMap,
  listFluidDict: interpret_util_1.argumentMap,
  listPreparation: interpret_util_1.argumentMap,
  listDefaultRoute: interpret_util_1.argumentMap,
  listVmpItem: interpret_util_1.argumentMap,
  listVmpIngredient: interpret_util_1.argumentMap,
  listVmpItemBnf: interpret_util_1.argumentMap,
  listAdmininstrationSchedule: interpret_util_1.argumentMap,
  listGroupUnit: interpret_util_1.argumentMap,
  listFreeRoute: interpret_util_1.argumentMap,
  getFreqDictItem: interpret_util_1.argumentMap,
  listSupplyQuantityUnit: interpret_util_1.argumentMap,
  listFormulary: interpret_util_1.argumentMap,
  listPrescribingUnit: interpret_util_1.argumentMap,
  reCheckVtmAttributeRes: interpret_util_1.argumentMap,
  vmp: interpret_util_1.argumentMap,
};
function IVtmMasteService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.drugKnowledge.api.service.IVtmMasteService',
    version: '1.0.0',
    methods: exports.IVtmMasteServiceWrapper,
  });
}
exports.IVtmMasteService = IVtmMasteService;
//generate by interpret-cli dubbo2.js
