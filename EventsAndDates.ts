import { Event } from "./models";

export interface OperationFilter {
    eventsIds: string[];
    datesIds: string[];
    sectorsIds: string[];
    pricesIds: string[];
};

export interface Request {
    entityCode: string;
    currentOperationFilter?: OperationFilter;
    showRelatedData?: boolean;
    eventsIds?: string;
    datesIds?: string;
    sectorsIds?: string;
    pricesIds?: string;
}

export type Response = Event[];