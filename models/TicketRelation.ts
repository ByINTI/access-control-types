import EventDate from "./EventDate";
import Price from "./Price";
import Ticket from "./Ticket";
import Event from "./Event";
import Sector from "./Sector";

interface TicketRelation {
  ticket_id: number;
  event_id: number;
  date_id: number;
  sector_id: number;
  price_id: number;
  created_at: string | Date;

  ticket?: Ticket;
  event?: Event;
  date?: EventDate;
  sector?: Sector;
  price?: Price;
}

export default TicketRelation;
