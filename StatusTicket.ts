import { TicketStatus } from "./models";

export interface Request {
    dateId?: string | number;
    lastId?: string | number;
    batchSize?: number;
}

export interface Response {
    lastId: string;
    ticketsQty: number;
    totalQty: number;
    tickets: { [key: string]: TicketStatus };
};