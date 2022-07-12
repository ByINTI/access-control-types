import { EventDate } from "./";
export declare enum EVENT_STATE {
    STATUS_REGISTER = "Registrado",
    STATUS_PUBLISHED = "Publicado",
    STATUS_BLOCKED = "Bloqueado",
    STATUS_DELETED = "Deletado"
}
export default interface Event {
    id: number;
    external_id: string;
    entity_code: string;
    name: string;
    description: string;
    image: string;
    status: EVENT_STATE;
    created_at: string | Date;
    updated_at: string | Date;
    deleted_at: string | null | Date;
    eventDates?: EventDate[];
}
