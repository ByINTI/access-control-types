import EventDate from "./EventDate";

interface DateRelation {
  primary_date_id: string;
  secondary_date_id: string;
  created_at: string | Date;

  primaryDate?: EventDate;
  secondaryDate?: EventDate;
}

export default DateRelation;
