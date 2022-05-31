export enum STATUS_TICKET {
    EXPECTING =  'expecting',
    PROCESSED =  'processed',
    CANCELED =  'canceled',
}

export interface TicketStatus {
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

export interface Request {
    dateId?: string | number;
    lastId?: string | number;
    batchSize?: number;
}

export interface Response {
    lastId: string;
    ticketsQty: number;
    tickets: { [key: string]: TicketStatus };
};