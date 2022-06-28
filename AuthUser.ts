export interface Request {
    entityCode: string;
    email: string;
    password: string;
    authentication: string;
    timestamp: number;
}

export interface Response {
    id: number;
    username: string;
    name: string;
    permissions: Permissions[];
    token: string;
}

export enum Permissions {
    DEVICE_NAME = "deviceName",
    OPERATION_SETTINGS = "operationSettings"
}
