"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owner = exports.Headers = exports.DeviceUpdate = exports.EventsAndDates = exports.StatusTicket = exports.PushEntrances = exports.models = void 0;
exports.models = __importStar(require("./models"));
exports.PushEntrances = __importStar(require("./PushEntrances"));
exports.StatusTicket = __importStar(require("./StatusTicket"));
exports.EventsAndDates = __importStar(require("./EventsAndDates"));
exports.DeviceUpdate = __importStar(require("./DeviceUpdate"));
exports.Headers = __importStar(require("./Headers"));
var models_1 = require("./models");
Object.defineProperty(exports, "Owner", { enumerable: true, get: function () { return models_1.Owner; } });
//# sourceMappingURL=index.js.map