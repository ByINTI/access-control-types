import EventDate from "./EventDate";
import Price from "./Price";
import Ticket from "./Ticket";
import Event from "./Event";
import Sector from "./Sector";

interface TicketRelation {
  id: number;
  ticket_id: number;
  event_id: number;
  date_id: number;
  sector_id: number | null;
  price_id: number;
  created_at: string | Date;
  reads_done: number;

  ticket?: Ticket;
  event?: Event;
  date?: EventDate;
  sector?: Sector | null;
  price?: Price;
}

export default TicketRelation;
