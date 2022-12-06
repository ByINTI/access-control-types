export interface PushEntranceItem {
    validatorCode: string;
    timestamp?: string;
    dateId?: string | number;
}
export interface Request {
    changes: PushEntranceItem[];
}
export interface Response {
    failedEntrances: PushEntranceItem[];
}
