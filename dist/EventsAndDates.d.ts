import { Event } from "./models";
export interface OperationFilter {
    eventsIds: number[];
    datesIds: number[];
    sectorsIds: number[];
    pricesIds: number[];
}
export interface Request {
    filterVersion?: number;
    entityCode: string;
    currentOperationFilter?: OperationFilter;
    currentOperationFilterJSON?: string;
    showRelatedData?: boolean;
    eventsIds?: string;
    datesIds?: string;
    sectorsIds?: string;
    pricesIds?: string;
}
export declare type Response = Event[];
