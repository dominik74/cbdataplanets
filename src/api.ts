import { ResidentJson } from "./types/ResidentJson";
import { JsonData } from "./types/jsonData";
import Planet from "./types/planet";
import PlanetJson from "./types/planet.json";

export namespace Api {
	export async function fetchData(url: string = "https://swapi.dev/api/planets") {
		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`${response.status}: ${response.statusText}`);
			}

			const jsonData: JsonData = await response.json();

			const planets: Planet[] = jsonData.results.map((jd: PlanetJson, i: number) => ({
				id: i,
				name: jd.name,
				rotationPeriod: jd.rotation_period,
				orbitalPeriod: jd.orbital_period,
				diameter: jd.diameter,
				climate: jd.climate,
				gravity: jd.gravity,
				terrain: jd.terrain,
				surfaceWater: jd.surface_water,
				population: jd.population,
				// residents: jd.residents,
				residents: [],
				residentsUrls: jd.residents,
				films: jd.films,
				created: new Date(jd.created),
				edited: new Date(jd.edited),
				url: jd.url,
			}));

			const nextUrl = jsonData.next;
			const prevUrl = jsonData.previous;

			return { planets, nextUrl, prevUrl };
		} catch (e) {
			throw e;	
		}
	}

	export async function fetchData2(url: string) {
		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`${response.status}: ${response.statusText}`);
			}

			return await response.json();
		} catch (e) {
			throw e;
		}
	}
}

