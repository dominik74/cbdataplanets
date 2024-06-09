import PlanetJson from "./PlanetJson";

export interface JsonData {
	count: number;
	next: string;
	previous: string;
	results: PlanetJson[];
}
