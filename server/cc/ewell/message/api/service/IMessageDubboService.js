'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const interpret_util_1 = require('interpret-util');
exports.IMessageDubboServiceWrapper = {
  messageTemplateStateChange: interpret_util_1.argumentMap,
  collectMessage: interpret_util_1.argumentMap,
  getReceiveMessageList: interpret_util_1.argumentMap,
  sendMessage: interpret_util_1.argumentMap,
  getMessageByMsgId: interpret_util_1.argumentMap,
  deleteMessage: interpret_util_1.argumentMap,
  getTemplateType: interpret_util_1.argumentMap,
  cancleCollectMessage: interpret_util_1.argumentMap,
  markMessageReaded: interpret_util_1.argumentMap,
  addMessageTemplate: interpret_util_1.argumentMap,
  sendDraftMessage: interpret_util_1.argumentMap,
  recoverMessage: interpret_util_1.argumentMap,
  getTypeMessageTemplate: interpret_util_1.argumentMap,
  getSendMessageList: interpret_util_1.argumentMap,
  getMessageTemplateById: interpret_util_1.argumentMap,
  editMessageTemplate: interpret_util_1.argumentMap,
  editMessageByMsgId: interpret_util_1.argumentMap,
};
function IMessageDubboService(dubbo) {
  return dubbo.proxyService({
    dubboInterface: 'cc.ewell.message.api.service.IMessageDubboService',
    version: '1.0.0',
    methods: exports.IMessageDubboServiceWrapper,
  });
}
exports.IMessageDubboService = IMessageDubboService;
//generate by interpret-cli dubbo2.js
