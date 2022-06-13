import { Event } from "./models";

export interface Request {
    entityCode: string;
}

export type Response = Event[];