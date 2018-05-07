import { Airline } from "../airlines/airline";

export class Airport {
    id: number;
    country: string;
    shortName: string;
    longName: string;
    airlines: Airline[];
}
