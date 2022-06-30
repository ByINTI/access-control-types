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
}

export default Price;
