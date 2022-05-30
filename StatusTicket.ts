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
}

export interface Request {
    dateId?: string | number;
    lastId?: string | number;
    batchSize?: number;
}

export interface Response {
    lastId: string;
    tickets: { [key: string]: TicketStatus };
};