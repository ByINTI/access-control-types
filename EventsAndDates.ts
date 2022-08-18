import { Event } from "./models";

export interface Request {
    entityCode: string;
    eventsIds?: string;
    datesIds?: string;
    sectorsIds?: string;
    pricesIds?: string;
}

export type Response = Event[];