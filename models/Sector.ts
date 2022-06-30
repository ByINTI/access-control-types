import Price from "./Price";

interface Sector {
  id: string;
  parent_id: string;
  event_code: string;
  external_id: string;
  name: string;
  order: number;

  prices?: Price[];
}

export default Sector;
