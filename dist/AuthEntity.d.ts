export interface IMSDevice {
    serial: string;
    name: string;
    uuid: string;
    type: string;
    app_version: string;
    battery: string;
    plugged: string;
    last_communication: string;
}
export interface Request {
    entityCode: string;
    uuid: string;
    appVersion: string;
    type: string;
    name: string;
}
export declare type Response = IMSDevice & {
    entityCode: string;
    entityName: string;
};
