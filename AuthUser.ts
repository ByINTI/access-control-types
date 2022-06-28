export interface Request {
    entityCode: string;
    email: string;
    password: string;
    authentication: string;
    timestamp: number;
}

export interface Response {
    name: string;
    permissions: Permissions[];
    token: string;
}

export enum Permissions {
    DEVICE_NAME = "deviceName",
    OPERATION_SETTINGS = "operationSettings"
}
