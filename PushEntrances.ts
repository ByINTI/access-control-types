export interface Request {
  change: {
    validatorCode: string;
    timestamp?: string;
    dateId?: number;
  }[];
  deviceName?: string;
}

export type Response = {
  [validatorCode: string]: boolean;
};
