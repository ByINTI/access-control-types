import { IMSDevice } from "./AuthEntity";
export interface Request {
    uuid: string;
    appVersion: string;
    type: string;
    name: string;
}
export type Response = IMSDevice;
