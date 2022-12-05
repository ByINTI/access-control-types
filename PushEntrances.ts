export interface Request {
    changes: {
        validatorCode: string;
        timestamp?: string;
        dateId?: string | number;
    }[]
}

export interface Response {
    failedEntrances: {
        validatorCode: string;
        timestamp?: string;
        dateId?: string | number;
    }[]
};
