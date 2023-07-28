'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const js_to_java_1 = __importDefault(require('js-to-java'));
class TherapeuticClassDictRes {
  constructor(params) {
    this.parentClassCode = params.parentClassCode;
    this.validIndicator = params.validIndicator;
    this.createUserId = params.createUserId;
    this.mainClassCnname = params.mainClassCnname;
    this.updateUserId = params.updateUserId;
    this.mainClassCode = params.mainClassCode;
    this.isparent = params.isparent;
    this.updateUser = params.updateUser;
    this.updateTime = params.updateTime;
    this.hospitalCode = params.hospitalCode;
    this.serialNo = params.serialNo;
    this.isshow = params.isshow;
    this.mainClassEnname = params.mainClassEnname;
    this.createTime = params.createTime;
    this.therapeuticClassEnname = params.therapeuticClassEnname;
    this.therapeuticClassCode = params.therapeuticClassCode;
    this.createUser = params.createUser;
    this.therapeuticClassCnname = params.therapeuticClassCnname;
  }
  __fields2java() {
    return {
      $class: 'cc.ewell.dict.api.dto.res.TherapeuticClassDictRes',
      $: {
        parentClassCode: js_to_java_1.default.String(this.parentClassCode),
        validIndicator: js_to_java_1.default.String(this.validIndicator),
        createUserId: js_to_java_1.default.String(this.createUserId),
        mainClassCnname: js_to_java_1.default.String(this.mainClassCnname),
        updateUserId: js_to_java_1.default.String(this.updateUserId),
        mainClassCode: js_to_java_1.default.String(this.mainClassCode),
        isparent: js_to_java_1.default.String(this.isparent),
        updateUser: js_to_java_1.default.String(this.updateUser),
        updateTime: js_to_java_1.default.String(this.updateTime),
        hospitalCode: js_to_java_1.default.String(this.hospitalCode),
        serialNo: js_to_java_1.default.String(this.serialNo),
        isshow: js_to_java_1.default.Short(this.isshow),
        mainClassEnname: js_to_java_1.default.String(this.mainClassEnname),
        createTime: js_to_java_1.default.String(this.createTime),
        therapeuticClassEnname: js_to_java_1.default.String(
          this.therapeuticClassEnname,
        ),
        therapeuticClassCode: js_to_java_1.default.String(
          this.therapeuticClassCode,
        ),
        createUser: js_to_java_1.default.String(this.createUser),
        therapeuticClassCnname: js_to_java_1.default.String(
          this.therapeuticClassCnname,
        ),
      },
    };
  }
}
exports.TherapeuticClassDictRes = TherapeuticClassDictRes;
//generate by interpret-cli dubbo2.js
