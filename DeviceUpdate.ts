import { IMSDevice } from "./AuthEntity";

export interface Request {
    entityCode: string;
    uuid: string;
    appVersion: string;
    type: string;
    name: string;
    timestamp: number;
}

export type Response =  IMSDevice & {
    entityCode: string,
    entityName: string,
};
