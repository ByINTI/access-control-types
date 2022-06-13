export enum STATUS_TICKET {
    EXPECTING =  'expecting',
    PROCESSED =  'processed',
    CANCELED =  'canceled',
}

export default interface TicketStatus {
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