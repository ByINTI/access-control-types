export interface Request {
    entityCode: string;
    email: string;
    password: string;
}
export interface Response {
    name: string;
    permissions: string[];
    token: string;
}
export declare enum Permissions {
    DEVICE_NAME = "deviceName",
    OPERATION_SETTINGS = "operationSettings"
}
