export interface PushEntranceItem {
    validatorCode: string;
    timestamp: string;
    dateId: string | number;
    uuid: string;
};

export interface Request {
    changes: PushEntranceItem[],
    deviceName: string
}

export interface Response {
    failedEntrances: PushEntranceItem[]
};
