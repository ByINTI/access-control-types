import { Price, Sector, EventDate, Event, TicketStatus } from "./";
import { Owner } from "./Common";

export default interface Ticket {
  id: number;
  external_id: string;
  validator_code: string;
  entity_code: string;
  event_id: number;
  date_id: number;
  sector_id: number;
  price_id: number;
  order_identifier: string;
  owner_name: string;
  owner_document: string;
  ticket_number: string | null;
  seat: string | null;
  max_usage: number;
  created_at: string | Date;
  updated_at: string | Date;
  owner: Owner;

  event?: Event;
  date?: EventDate;
  sector?: Sector;
  price?: Price;
  ticketStates?: TicketStatus[];
  currentStatus?: TicketStatus;
}

