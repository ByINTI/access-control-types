import { TicketStatus, TicketRelation } from "./";
import { Owner } from "./Common";

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
  created_at: string | Date;
  updated_at: string | Date;
  owner: Owner;

  relations?: TicketRelation[];
  ticketStates?: TicketStatus[];
  currentStatus?: TicketStatus;
}

