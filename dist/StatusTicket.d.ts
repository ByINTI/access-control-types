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
    isHalfPriceTicket: boolean;
    buyerCpf: string;
}
export interface Response {
    lastId: string;
    ticketsQty: number;
    totalQty: number;
    tickets: {
        [key: string]: StatusTicketItem;
    };
}