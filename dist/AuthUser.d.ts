export interface Request {
    email: string;
    password: string;
}
export interface Response {
    id: number;
    username: string;
    name: string;
    permissions: Permissions[];
    token: string;
}
export declare enum Permissions {
    DEVICE_NAME = "deviceName",
    OPERATION_SETTINGS = "operationSettings"
}
