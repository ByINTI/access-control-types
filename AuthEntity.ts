export interface IMSDevice {
    name: string;
    uuid: string;
    type: string;
    app_version: string;
    last_communication: string;
}

export interface Request {
    entityCode: string;
    uuid: string;
    appVersion: string;
    type: string;
    name: string;
    authentication: string;
    timestamp: number;
}

export type Response =  IMSDevice & { entityCode: string, entityName: string , authenticationToken: string };
