import { Event } from "./models";

export interface Request {
    entityCode: string;
    eventsIds?: number[];
    datesIds?: number[];
    sectorsIds?: number[];
    pricesIds?: number[];
}

export type Response = Event[];