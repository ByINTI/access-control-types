import { Event } from "./models";

export interface Request {
    entityCode: string;
    currentOperationFilter?: {
        eventsIds: string[];
        datesIds: string[];
        sectorsIds: string[];
        pricesIds: string[];
    };
    showRelatedData?: boolean;
    eventsIds?: string;
    datesIds?: string;
    sectorsIds?: string;
    pricesIds?: string;
}

export type Response = Event[];