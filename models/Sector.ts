import Price from "./Price";

interface Sector {
  id: string;
  parent_id: string;
  date_code: string;
  event_code: string;
  external_id: string;
  name: string;
  order: number;
  updated_at: string | Date;
  created_at: string | Date;

  prices?: Price[];
}

export default Sector;
