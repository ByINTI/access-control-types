export enum EVENT_STATE {
  STATUS_REGISTER = 'Registrado',
  STATUS_PUBLISHED = 'Publicado',
  STATUS_BLOCKED = 'Bloqueado',
  STATUS_DELETED = 'Deletado',
}

export default interface Event {
  event_code: string;
  name: string;
  description: string;
  image: string;
  establishment_code: string;
  status: string;
  entity_code: string;
  created_at: string | Date;
  updated_at: string | Date;
  deleted_at: string | null | Date;
}
