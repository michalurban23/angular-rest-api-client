import { Airport } from "../airports/airport";

export class Airline {
    id: number;
    name: string;
    countryOfOrigin: string;
    airports: Airport[];
}
