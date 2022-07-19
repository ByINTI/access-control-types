import { Event, EventDate, Sector } from "./";

export enum TYPES {
  TYPELESS  = 'typeless',
  REGULAR   = 'regular',
  MAP       = "map"
}

export default interface Price {
  id: number;
  external_id: string;
  entity_code: string;
  event_id: number;
  date_id: number;
  sector_id: number | null;
  name: string;
  description: string | null;
  order: number;
  document_needed: boolean;
  is_half_price: boolean;
  type: TYPES;
  created_at: string | Date;
  updated_at: string | Date;

  event?: Event;
  date?: EventDate;
  sector?: Sector | null;
}
