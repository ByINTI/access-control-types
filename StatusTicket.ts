export enum STATUS_TICKET {
    EXPECTING =  'expecting',
    PROCESSED =  'processed',
    CANCELED =  'canceled',
}

interface TicketStatus {
    id: number;
    validator_code: string;
    device_name?: string;
    state: STATUS_TICKET;
    created_at: string | Date;
}

export interface Request {
    dateId?: string | number;
    lastId?: string | number;
    batchSize?: number;
}

export interface Response {
    lastId: number;
    tickets: { [key: string]: TicketStatus };
};