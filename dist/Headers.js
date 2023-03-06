"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.General = exports.Auth = void 0;
var Auth;
(function (Auth) {
    Auth["AppVersion"] = "X-Inti-App-Version";
    Auth["Timestamp"] = "X-Inti-Timestamp";
    Auth["Uuid"] = "X-Inti-Uuid";
    Auth["Authentication"] = "X-Inti-Authentication";
})(Auth = exports.Auth || (exports.Auth = {}));
;
var General;
(function (General) {
    General["EntityCode"] = "X-Inti-Entity-Code";
    General["Owner"] = "X-Inti-Owner";
})(General = exports.General || (exports.General = {}));
;
exports.default = {
    Auth,
    General,
};
//# sourceMappingURL=Headers.js.map