import { useContext, useEffect, useState } from "react";
import { Button } from "./Button";
import { AppContext } from "@/AppContext";
import Planet from "@/types/Planet";
import { H1 } from "./H1";
import styled from "styled-components";
import { A } from "./A";
import Category from "./Category";
import { Resident } from "@/types/Resident";
import { Api } from "@/api";
import { ResidentJson } from "@/types/ResidentJson";
import { P } from "./P";

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
						<P>rotation period: {planet.rotationPeriod}</P>
						<P>orbital period: {planet.orbitalPeriod}</P>
						<P>diameter: {planet.diameter}</P>
						<P>climate: {planet.climate}</P>
						<P>gravity: {planet.gravity}</P>
						<P>terrain: {planet.terrain}</P>
						<P>surface water: {planet.surfaceWater}</P>
						<P>population: {planet.population}</P>

						{planet.residentsUrls && planet.residentsUrls.length > 0 &&
							<Category name="residents"
									  onExpand={() => residents_onExpand(planet.residents, planet.residentsUrls)}>
								{planet.residents && planet.residents.map((resident: Resident, id) => (
									<Category name={resident.name}
											  onExpand={() => null}
											  isSubCategory={true}
											  key={id}>
										<P>name: {resident.name}</P>
										<P>height: {resident.height}</P>
										<P>mass: {resident.mass}</P>
										<P>hair color: {resident.hairColor}</P>
										<P>eye color: {resident.eyeColor}</P>
										<P>birth year: {resident.birthYear}</P>
										<P>gender: {resident.gender}</P>
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

						<P><span>url: <A href={planet.url}>{planet.url}</A></span></P>
					</StyledContentDiv>
					<StyledOtherInfoDiv>
						Vytvořeno: {planet.created.toDateString()}
						&nbsp;&nbsp;
						Upraveno: {planet.edited.toDateString()}
					</StyledOtherInfoDiv>
				</>
			) : (
				<P>Žádná planeta nevybrána.</P>
			)}
		</StyledMainDiv>
	)
}
