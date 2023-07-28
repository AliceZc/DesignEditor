'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class OperationRoomAddReq {
  constructor(params) {
    this.opRoomNameList = params.opRoomNameList;
    this.location = params.location;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.surgery.api.dto.req.OperationRoomAddReq',
      $: {
        opRoomNameList: this.opRoomNameList
          ? js_to_java_1.default.List(
              (this.opRoomNameList || []).map((paramItem) => {
                return js_to_java_1.default.String(paramItem);
              }),
            )
          : null,
        location: js_to_java_1.default.String(this.location),
      },
    };
  }
}
exports.OperationRoomAddReq = OperationRoomAddReq;
//generate by interpret-cli dubbo2.js
