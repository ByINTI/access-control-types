import { Ticket } from "./";
export declare enum STATUS_TICKET {
    EXPECTING = "expecting",
    PROCESSED = "processed",
    FULL_PROCESSED = "full_processed",
    CANCELED = "canceled"
}
export default interface TicketStatus {
    id: number;
    ticket_id: number;
    device_name?: string;
    state: STATUS_TICKET;
    created_at: string | Date;
    ticket?: Ticket;
}
