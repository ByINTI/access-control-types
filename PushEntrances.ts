export interface PushEntranceItem {
    uuid: string;
    validatorCode: string;
    timestamp: string;
    dateId: string | number | null;
};

export interface Request {
    changes: PushEntranceItem[],
    deviceName: string
}

export interface Response {
    failedEntrances: PushEntranceItem[]
};
