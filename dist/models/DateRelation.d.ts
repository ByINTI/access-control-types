import EventDate from "./EventDate";
interface DateRelation {
    primary_date_id: number;
    secondary_date_id: number;
    created_at: string | Date;
    primaryDate?: EventDate;
    secondaryDate?: EventDate;
}
export default DateRelation;
