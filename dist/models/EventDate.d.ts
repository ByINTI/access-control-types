import { Price, Sector, Event } from "./";
export default interface EventDate {
    id: number;
    external_id: string;
    entity_code: string;
    event_id: number;
    name: string;
    start_datetime: string | Date;
    end_datetime: string | Date;
    created_at: string | Date;
    updated_at: string | Date;
    expected_audience?: number;
    event?: Event;
    sectors?: Sector[];
    prices?: Price[];
}
