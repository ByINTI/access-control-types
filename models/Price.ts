export enum TYPES {
  regular = 'regular',
  map = "map"
}

interface Price {
  id: string;
  event_code: string;
  external_id: string;
  sector_id: string;
  name: string;
  description: string;
  order: number;
  document_needed: boolean;
  half_entry_law: boolean;
  type: TYPES;
  updated_at: string | Date;
  created_at: string | Date;
}

export default Price;
