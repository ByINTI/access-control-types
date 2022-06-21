export enum STATUS_TICKET {
    EXPECTING =  'expecting',
    PROCESSED =  'processed',
    FULL_PROCESSED =  'full_processed',
    CANCELED =  'canceled',
}

export default interface TicketStatus {
  id: number;
  validator_code: string;
  device_name?: string;
  state: STATUS_TICKET;
  created_at: string | Date;
}