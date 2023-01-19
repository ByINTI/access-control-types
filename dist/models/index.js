"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Common = exports.PRICE_TYPES = exports.EVENT_STATE = exports.TICKET_PROCESSED_STATES = exports.STATUS_TICKET = void 0;
var TicketStatus_1 = require("./TicketStatus");
Object.defineProperty(exports, "STATUS_TICKET", { enumerable: true, get: function () { return TicketStatus_1.STATUS_TICKET; } });
Object.defineProperty(exports, "TICKET_PROCESSED_STATES", { enumerable: true, get: function () { return TicketStatus_1.TICKET_PROCESSED_STATES; } });
var Event_1 = require("./Event");
Object.defineProperty(exports, "EVENT_STATE", { enumerable: true, get: function () { return Event_1.EVENT_STATE; } });
var Price_1 = require("./Price");
Object.defineProperty(exports, "PRICE_TYPES", { enumerable: true, get: function () { return Price_1.TYPES; } });
var Common_1 = require("./Common");
Object.defineProperty(exports, "Common", { enumerable: true, get: function () { return __importDefault(Common_1).default; } });
//# sourceMappingURL=index.js.map