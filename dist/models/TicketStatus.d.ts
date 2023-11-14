import { Ticket, EventDate, Device } from "./";
export declare enum STATUS_TICKET {
    CREATED = "created",
    PROCESSED = "processed",
    FULL_PROCESSED = "full_processed",
    CANCELED = "canceled",
    UNPROCESSED = "unprocessed",
    UPDATED = "updated"
}
export declare const TICKET_PROCESSED_STATES: STATUS_TICKET[];
export default interface TicketStatus {
    id: number;
    ticket_id: number;
    date_id: number | null;
    device_id: number | null;
    state: STATUS_TICKET;
    read_uuid: string;
    created_at: string | Date;
    ticket?: Ticket;
    date?: EventDate;
    device?: Device;
}
