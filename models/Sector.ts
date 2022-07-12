import Event from "./Event";
import EventDate from "./EventDate";
import Price from "./Price";

export default interface Sector {
  id: number;
  external_id: string;
  entity_code: string;
  event_id: number;
  date_id: number;
  name: string;
  order: number;
  updated_at: string | Date;
  created_at: string | Date;

  prices?: Price[];
  event?: Event;
  eventDate?: EventDate;
}
