import { Owner } from "./Common";

export default interface Device {
  id: string;
  name: string;
  uuid: string;
  app_version: string;
  auth_token: string;
  entity_code: string;
  created_at: string | Date;
  updated_at: string | Date | null;
  deleted_at: string | Date | null;
  last_source_timestamp: string | Date | null;
  owner: Owner;
}
