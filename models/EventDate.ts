export default interface EventDate {
  date_code: string;
  name: string;
  start_datetime: string;
  end_datetime: string;
  event_code: string;
  expected_audience: number;
  updated_at: string | Date;
  created_at: string | Date;
}
