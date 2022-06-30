export declare enum TYPES {
    regular = "regular",
    map = "map"
}
interface Price {
    id: string;
    date_code: string;
    event_code: string;
    external_id: string;
    sector_id: string | null;
    name: string;
    description: string | null;
    order: number;
    document_needed: boolean;
    half_entry_law: boolean;
    type: TYPES;
    updated_at: string | Date;
    created_at: string | Date;
}
export default Price;
