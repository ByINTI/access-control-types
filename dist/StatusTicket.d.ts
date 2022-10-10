import { STATUS_TICKET } from "./models/TicketStatus";
export interface Request {
    dateId?: string | number;
    lastId?: string | number;
    batchSize?: number;
}
export interface StatusTicketItem {
    id: number;
    validatorCode: string;
    deviceName?: string;
    state: STATUS_TICKET;
    createdAt: string | Date;
    buyerName: string;
    gates: string[];
    orderIdentifier: string;
    ticketNumber: string;
    seat: string;
    documentNeeded: boolean;
    isHalfPriceTicket: boolean;
    buyerCpf: string;
    priceName: string;
    maxUsage: number;
    ticketId: number;
    dateId: number;
    priceId: number;
    currentUsage: number;
}
export interface Response {
    lastId: string;
    ticketsQty: number;
    totalQty: number;
    tickets: {
        [key: string]: StatusTicketItem;
    };
}
