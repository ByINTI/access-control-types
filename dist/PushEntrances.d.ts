export declare type EntranceChange = {
    validatorCode: string;
    timestamp?: string;
    dateId?: number;
};
export interface Request {
    change: EntranceChange[];
    deviceName?: string;
}
export declare type Response = {
    [validatorCode: string]: boolean;
};
