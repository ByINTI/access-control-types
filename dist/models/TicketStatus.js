"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TICKET_PROCESSED_STATES = exports.STATUS_TICKET = void 0;
var STATUS_TICKET;
(function (STATUS_TICKET) {
    STATUS_TICKET["CREATED"] = "created";
    STATUS_TICKET["PROCESSED"] = "processed";
    STATUS_TICKET["FULL_PROCESSED"] = "full_processed";
    STATUS_TICKET["CANCELED"] = "canceled";
})(STATUS_TICKET = exports.STATUS_TICKET || (exports.STATUS_TICKET = {}));
exports.TICKET_PROCESSED_STATES = [
    STATUS_TICKET.FULL_PROCESSED,
    STATUS_TICKET.PROCESSED,
];
//# sourceMappingURL=TicketStatus.js.map