import { TicketStatus, TicketRelation } from "./";
import { Owner } from "./Common";

export declare enum TicketStates {
  CREATED = "created",
  PROCESSED = "processed",
  FULL_PROCESSED = "full_processed",
  CANCELED = "canceled",
}

export default interface Ticket {
  id: number;
  external_id: string;
  validator_code: string;
  entity_code: string;
  order_identifier: string;
  owner_name: string;
  owner_document: string;
  ticket_number: string | null;
  seat: string | null;
  max_usage: number;
  reads_done: number;
  created_at: string | Date;
  updated_at: string | Date;
  last_read_datetime: string | Date | null;
  owner: Owner;
  status: TicketStates;

  relations?: TicketRelation[];
  ticketStates?: TicketStatus[];
  currentStatus?: TicketStatus;
}

