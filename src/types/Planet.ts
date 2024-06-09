import { Resident } from "./Resident";

export default interface Planet {
    id: number;
	name: string;
	rotationPeriod: number;
	orbitalPeriod: number;
	diameter: number;
	climate: string;
	gravity: string;
	terrain: string;
	surfaceWater: string;
	population: number;
	residents: Resident[];
	residentsUrls: string[];
	films: string[];
	created: Date;
	edited: Date;
	url: string;
}
