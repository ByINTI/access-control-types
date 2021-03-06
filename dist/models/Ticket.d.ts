export default interface Ticket {
    validator_code: string;
    price_name: string;
    ticket_id: string;
    buyer_name: string;
    buyer_cpf: string;
    order_identifier: string;
    is_half_price_ticket: boolean;
    document_needed: boolean;
    date_code: string;
    establishment_gates: string;
    seat: string;
    ticket_number: string;
    max_usage: number;
    updated_at: string | Date;
    created_at: string | Date;
}
