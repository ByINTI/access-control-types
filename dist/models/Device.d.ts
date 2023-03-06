import { Owner } from "./Common";
export default interface Device {
    id: string;
    code: string;
    uuid: string;
    app_version: string;
    auth_token: string;
    entity_code: string;
    created_at: string | Date;
    updated_at: string | Date | null;
    deleted_at: string | Date | null;
    owner: Owner;
}
