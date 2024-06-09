import { useContext, useEffect, useState } from "react";
import { Button } from "./Button";
import { AppContext } from "@/AppContext";
import Planet from "@/types/planet";
import { H1 } from "./H1";
import styled from "styled-components";
import { A } from "./A";
import Category from "./Category";
import { Resident } from "@/types/Resident";
import { Api } from "@/api";
import { ResidentJson } from "@/types/ResidentJson";

const StyledMainDiv = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	padding: 16px;
	overflow-y: auto;
`;

const StyledContentDiv = styled.div`
	margin-top: 24px;
`;

const StyledOtherInfoDiv = styled.div`
	text-align: center;
	margin-top: auto;
	color: gray;
	font-size: small;
`;

interface Props {
	selectedPlanetId: number;
}

export default function MainDiv(props: Props) {
	const {planets} = useContext(AppContext);
	const [planet, setPlanet] = useState<Planet | undefined>(undefined);

	useEffect(() => {
		const planet = planets.find(p => p.id === props.selectedPlanetId);
		setPlanet(planet);
	}, [props.selectedPlanetId]);

	async function residents_onExpand(dataArray: Resident[], dataUrls: string[]) {
		if (planet === undefined) {
			return;
		}

		const promises = dataUrls.map((url: string) => Api.fetchData2(url))
		const results: ResidentJson[] = await Promise.all(promises);
		const res: Resident[] = (results as ResidentJson[]).map((jd: ResidentJson) => ({
			name: jd.name,
			height: jd.height,
			mass: jd.mass,
			hairColor: jd.hair_color,
			eyeColor: jd.eye_color,
			birthYear: jd.birth_year,
			gender: jd.gender,
			homeworld: jd.homeworld,
			films: jd.films,
			species: jd.species,
			vehicles: jd.vehicles,
			starships: jd.starships,
			created: jd.created,
			edited: jd.edited,
			url: jd.url,
		}));

		setPlanet({...planet, residents: res})
	}

	return (
		<StyledMainDiv>
			{planet ? (
				<>
					<H1>{planet.name}</H1>
					<StyledContentDiv>
						<p>rotation period: {planet.rotationPeriod}</p>
						<p>orbital period: {planet.orbitalPeriod}</p>
						<p>diameter: {planet.diameter}</p>
						<p>climate: {planet.climate}</p>
						<p>gravity: {planet.gravity}</p>
						<p>terrain: {planet.terrain}</p>
						<p>surface water: {planet.surfaceWater}</p>
						<p>population: {planet.population}</p>

						{planet.residentsUrls && planet.residentsUrls.length > 0 &&
							<Category name="residents"
									  onExpand={() => residents_onExpand(planet.residents, planet.residentsUrls)}>
								{planet.residents && planet.residents.map((resident: Resident, id) => (
									<Category name={resident.name}
											  onExpand={() => null}
											  isSubCategory={true}
											  key={id}>
										<p>name: {resident.name}</p>
										<p>height: {resident.height}</p>
										<p>mass: {resident.mass}</p>
										<p>hair color: {resident.hairColor}</p>
										<p>eye color: {resident.eyeColor}</p>
										<p>birth year: {resident.birthYear}</p>
										<p>gender: {resident.gender}</p>
										<span>homeworld: </span><A href={resident.homeworld}>{resident.homeworld}</A><br />
										<span>url: </span><A href={resident.url}>{resident.url}</A><br />
									</Category>
								))}
							</Category>
						}

						{planet.films && planet.films.length > 0 &&
							<Category name="films" onExpand={() => null}>
								{planet.films.map((film, id) => (
									<div key={id}>
										<A href={film}>{film}</A><br />
									</div>
								))}
							</Category>
						}

						<p><span>url: <A href={planet.url}>{planet.url}</A></span></p>
					</StyledContentDiv>
					<StyledOtherInfoDiv>
						Vytvořeno: {planet.created.toDateString()}
						&nbsp;&nbsp;
						Upraveno: {planet.edited.toDateString()}
					</StyledOtherInfoDiv>
				</>
			) : (
				<p>Žádná planeta nevybrána.</p>
			)}
		</StyledMainDiv>
	)
}
